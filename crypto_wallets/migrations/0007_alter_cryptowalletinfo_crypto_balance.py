# Generated by Django 4.1.3 on 2023-05-27 14:45

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('crypto_wallets', '0006_alter_cryptowalletinfo_current_plan'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cryptowalletinfo',
            name='crypto_balance',
            field=models.FloatField(default=0, validators=[django.core.validators.MinValueValidator(0.0)]),
        ),
    ]
