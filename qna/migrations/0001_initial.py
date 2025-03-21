# Generated by Django 3.2.16 on 2022-12-28 16:13

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='QnA',
            fields=[
                ('qna_id', models.IntegerField(primary_key=True, serialize=False, verbose_name='qna_id')),
                ('title', models.CharField(max_length=50, verbose_name='TITLE')),
                ('content', models.TextField(verbose_name='CONTENT')),
                ('user_id', models.ForeignKey(db_column='id', on_delete=django.db.models.deletion.CASCADE, related_name='qna.user+', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
