import numpy as np
import glob
import pickle
import os

from typing import Dict
from typing import Tuple

from PathFilter import PathFilter
from scipy.spatial.transform import Rotation
class SmplObjects(object):
    joints = ["m_avg_Pelvis"
    ,"m_avg_L_Hip"
    ,"m_avg_R_Hip"
    ,"m_avg_Spine1"

    ,"m_avg_L_Knee"
    ,"m_avg_R_Knee"
    ,"m_avg_Spine2"

    ,"m_avg_L_Ankle"
    ,"m_avg_R_Ankle"
    ,"m_avg_Spine3"

    ,"m_avg_L_Foot"
    ,"m_avg_R_Foot"
    ,"m_avg_Neck"

    ,"m_avg_L_Collar"
    ,"m_avg_R_Collar"

    ,"m_avg_Head"
    ,"m_avg_L_Shoulder"
    ,"m_avg_R_Shoulder"

    ,"m_avg_L_Elbow"
    ,"m_avg_R_Elbow"
    ,"m_avg_L_Wrist"
    ,"m_avg_R_Wrist"
    ,"m_avg_L_Hand"
    ,"m_avg_R_Hand"]
    def __init__(self, read_path):
        self.files = {}

        # For AIST naming convention
        #paths = PathFilter.filter(read_path, dance_genres=["gBR"],  dance_types=["sBM"], music_IDs=["0"])
        paths = PathFilter.filter(read_path, dance_genres=None,  dance_types=None, music_IDs=None)
        for path in paths:
            filename = path.split("/")[-1]
            
             # load npy file
            if filename.endswith(".npy"):
                with open(path, 'rb') as f:
                    data = np.load(f)
                    data = np.array(data)  # (N, 225)
                    f.close()
                trans = data[:, 6:9]
                poses = data[:, 9:]
                poses = Rotation.from_matrix(poses.reshape(-1, 3, 3)).as_rotvec().reshape(-1, 72)

                self.files[filename] = {"smpl_poses": poses,
                                        "smpl_trans": trans}

            # load pkl file
            else:
                with open(path, "rb") as fp:
                    data = pickle.load(fp)
                self.files[filename] = {"smpl_poses":data["smpl_poses"],
                                        "smpl_trans":data["smpl_trans"]}
        self.keys = [key for key in self.files.keys()]

    def __len__(self):
        return len(self.keys)

    def __getitem__(self, idx:int) -> Tuple[str, Dict]:
        key = self.keys[idx]
        return key, self.files[key]
