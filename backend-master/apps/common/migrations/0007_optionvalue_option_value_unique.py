# Generated by Django 4.1.7 on 2023-05-04 09:48

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("common", "0006_option_optionvalue"),
    ]

    operations = [
        migrations.AddConstraint(
            model_name="optionvalue",
            constraint=models.UniqueConstraint(
                fields=("option", "value"), name="option_value_unique"
            ),
        ),
    ]