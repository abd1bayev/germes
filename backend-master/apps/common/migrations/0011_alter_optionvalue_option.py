# Generated by Django 4.1.7 on 2023-05-11 22:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    dependencies = [
        ("common", "0010_alter_optionvalue_option"),
    ]

    operations = [
        migrations.AlterField(
            model_name="optionvalue",
            name="option",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="values",
                to="common.option",
            ),
        ),
    ]