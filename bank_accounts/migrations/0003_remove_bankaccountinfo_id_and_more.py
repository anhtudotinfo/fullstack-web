# Generated by Django 4.1.3 on 2023-04-08 14:34

import bank_accounts.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bank_accounts', '0002_alter_bankaccountinfo_bank_account_balance_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='bankaccountinfo',
            name='id',
        ),
        migrations.AlterField(
            model_name='bankaccountinfo',
            name='bank_account_number',
            field=models.IntegerField(default=bank_accounts.models.BankAccountInfo.generate, editable=False, primary_key=True, serialize=False, unique=True),
        ),
    ]