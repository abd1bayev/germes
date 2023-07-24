# Generated by Django 4.1.7 on 2023-04-18 10:21

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("catalogs", "0009_alter_catalog_icon"),
    ]

    operations = [
        migrations.RemoveConstraint(
            model_name="catalog",
            name="unique_catalog_name",
        ),
        migrations.AddConstraint(
            model_name="catalog",
            constraint=models.UniqueConstraint(
                fields=("parent", "name"), name="unique_catalog_name"
            ),
        ),
    ]