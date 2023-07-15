# Generated by Django 4.1.3 on 2023-06-17 18:06

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('crypto_wallets', '0009_alter_cryptowalletinfo_crypto_balance'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cryptowalletinfo',
            name='crypto_balance',
            field=models.FloatField(validators=[django.core.validators.MinValueValidator(0.0)]),
        ),
    ]
