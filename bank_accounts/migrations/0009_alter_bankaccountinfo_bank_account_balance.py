# Generated by Django 4.1.3 on 2023-05-08 17:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bank_accounts', '0008_alter_bankaccountinfo_bank_account_balance'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bankaccountinfo',
            name='bank_account_balance',
            field=models.PositiveIntegerField(default=0),
        ),
    ]
