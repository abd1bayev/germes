# Generated by Django 4.1.7 on 2023-05-04 10:26

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("common", "0007_optionvalue_option_value_unique"),
    ]

    operations = [
        migrations.AlterField(
            model_name="optionvalue",
            name="value",
            field=models.CharField(max_length=150),
        ),
    ]
