# views.py
from rest_framework import viewsets

from signup.models import Profile
from .models import Dance
from music.models import Music
from .permissions import CustomPermission
from .serializers import DanceSerializer, DanceCreateSerializer
from rest_framework.permissions import IsAuthenticated

from . import evaluator, preprocessing
from django_filters.rest_framework import DjangoFilterBackend

import subprocess, sys, os, shutil
from pathlib import Path
from django.core.files.base import ContentFile, File
import moviepy.editor as mpe
from mutagen.wave import WAVE

def combine_audio(vidname, audname, outname, fps=60): 
    my_clip = mpe.VideoFileClip(vidname)
    audio_background = mpe.AudioFileClip(audname)
    final_clip = my_clip.set_audio(audio_background)
    final_clip.write_videofile(outname,fps=fps)

#combine_audio("test.mp4", "test.mp3", "test_over.mp4") # i create a new file
#combine_audio("test.mp4", "test.mp3", "test.mp4") # i rewrite on the same file```

class DanceViewSet(viewsets.ModelViewSet):
    queryset = Dance.objects.all()
    permission_classes = [IsAuthenticated, CustomPermission]
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['music']
    
    def get_queryset(self):
        queryset = Dance.objects.all()
        query_set = queryset.filter(user=self.request.user)
        return query_set
    
    def get_serializer_class(self):
        if self.action == 'list' or 'retrieve':
            return DanceSerializer
        return DanceCreateSerializer
    
    def perform_create(self, serializer):
        print("here1")
        music = Music.objects.get(music_id=self.request.data['music'])
        #print(music)
        #print(music.file)
        #music_path = os.path.join('media', music.file)
        #print(music_path)
        print('here2')
        print(music.file)
        print(music.file.path)
        print(music.name)
        
        os.system("python dance/preprocessing.py --audio_dir " + music.file.path + " --audio_name " + music.name)
        os.system(f"python dance/evaluator.py")
        os.system("python dance/Convert.py --input_pkl_base ai/outputs --fbx_source_path ai/fbx_here/SMPL_m_unityDoubleBlends_lbs_10_scale5_207_v1.0.0.fbx --output_base ai/fbx_output --output_name "+music.name)
        
        audio_tmp = WAVE(music.file.path)
        audio_len = int(audio_tmp.info.length)
        os.system('cd C:/Program Files/Blender Foundation/Blender 3.4&&blender C:/Users/User/Desktop/proj/ai_choreographer/ai/blender/untitled.blend -b --python-expr "import bpy;bpy.ops.import_scene.fbx( filepath = \'C:/Users/User/Desktop/proj/ai_choreographer/ai/fbx_output/love_on_top_love_on_top.fbx\');bpy.ops.wm.save_as_mainfile(filepath=\'C:/Users/User/Desktop/proj/ai_choreographer/ai/blender/untitled.blend\')"&&blender -b C:/Users/User/Desktop/proj/ai_choreographer/ai/blender/untitled.blend -s 1 -e '+ str(audio_len*60)+' -a')
        combine_audio("ai/blender_output/blender_output0001-0360.mp4", music.file.path, "ai/music_video/"+music.name+".mp4")
        # test중 : 경로에 저장되어 있는 파일을 불러와서 DB 저장하기 => fbx 파일 생성되는거 확인하고 영상 저장되는지 확인하자!
        path = Path("ai/music_video/"+music.name+".mp4")
        with path.open(mode='rb') as f:
            serializer.save(user = self.request.user, file=File(f, name=path.name))
            
            
        #shutil.rmtree('ai/preprocessing_output') #preprocessing 결과 삭제
        #shutil.rmtree('ai/outputs') #evaluator 결과 삭제
        #os.remove('ai/fbx_output/'+music.name+'.fbx') #fbx 결과 삭제 -> 삭제하면 안돼. 여기 있는 경로로 사용함
        