# for each image in ./public/Images/ 
# every image in that directory and its subdirectories will be converted to a .webp file

import os
from PIL import Image
import sys
import PIL

PIL.Image.MAX_IMAGE_PIXELS = 933120000

# get the current working directory
cwd = os.getcwd()

# get the path to the images directory
path = os.path.join(cwd, 'public', 'Images')

# get the list of all files in directory tree at given path
list_of_files = os.listdir(path)

def convert_files_of_dir(dir_path):
    # get the list of all files in directory tree at given path
    list_of_files = os.listdir(dir_path)
    # iterate over all the entries
    for entry in list_of_files:
        # create full path
        full_path = os.path.join(dir_path, entry)
        # if entry is a directory then get the list of files in this directory
        try :
            if os.path.isdir(full_path):
                convert_files_of_dir(full_path)
            else:
                # check if the file is an image
                if entry.endswith('.jpg') or entry.endswith('.png') or entry.endswith('.jpeg') or entry.endswith('.JPG') :
                    # convert the image to webp format
                    img = Image.open(full_path)
                    img.save(full_path[:-4] + '.webp', 'webp')
                    # remove the old image
                    os.remove(full_path)
        except :
            print('Error converting file: ' + full_path)

# iterate over all the entries
convert_files_of_dir(path)

print('All images converted to .webp format')
