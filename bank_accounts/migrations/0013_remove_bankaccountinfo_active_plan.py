# Generated by Django 4.1.3 on 2023-05-15 11:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bank_accounts', '0012_bankaccountinfo_active_plan'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='bankaccountinfo',
            name='active_plan',
        ),
    ]
