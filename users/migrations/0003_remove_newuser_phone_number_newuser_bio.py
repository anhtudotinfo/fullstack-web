# Generated by Django 4.1.3 on 2023-04-06 05:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_newuser_phone_number'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='newuser',
            name='phone_number',
        ),
        migrations.AddField(
            model_name='newuser',
            name='bio',
            field=models.TextField(blank=True, max_length=500, verbose_name='bio'),
        ),
    ]
