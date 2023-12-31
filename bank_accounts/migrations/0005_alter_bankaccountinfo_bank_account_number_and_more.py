# Generated by Django 4.1.3 on 2023-05-08 11:26

import bank_accounts.models
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('bank_accounts', '0004_alter_bankaccountinfo_bank_account_balance'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bankaccountinfo',
            name='bank_account_number',
            field=models.IntegerField(default=bank_accounts.models.BankAccountInfo.generate, editable=False, unique=True),
        ),
        migrations.AlterField(
            model_name='bankaccountinfo',
            name='user_bank_acc',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, related_name='profile', serialize=False, to=settings.AUTH_USER_MODEL),
        ),
    ]
