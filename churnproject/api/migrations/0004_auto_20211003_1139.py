# Generated by Django 3.1.2 on 2021-10-03 11:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20211003_1127'),
    ]

    operations = [
        migrations.RenameField(
            model_name='service',
            old_name='typeService',
            new_name='service',
        ),
    ]
