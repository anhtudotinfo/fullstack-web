# Generated by Django 4.1.3 on 2023-05-15 10:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bank_accounts', '0011_alter_bankaccountinfo_bank_account_balance'),
    ]

    operations = [
        migrations.AddField(
            model_name='bankaccountinfo',
            name='active_plan',
            field=models.IntegerField(default=0),
        ),
    ]