import os
import sys
import matplotlib.pyplot as plt
from zipfile import ZipFile
from mediapipe_model_maker import gesture_recognizer
import shutil
# https://colab.research.google.com/

# global vars
workingDir = os.getcwd()
dataDir = os.path.join(workingDir, 'data')

# Check if folder exists otherwise create it
if(os.path.exists(dataDir) == False):
    os.mkdir(dataDir)
print("Data found in: ", dataDir)

# Remove old training data
if(os.path.exists(os.path.join(dataDir, 'gestures')) == True):
    print("Removing old data")
    shutil.rmtree(os.path.join(dataDir, 'gestures'))

# Check if gestures.zip exists
if(os.path.exists(os.path.join(dataDir, 'gestures.zip')) == False):
    print("gestures.zip does not exist")
    sys.exit()

# loading the temp.zip and creating a zip object
with ZipFile(os.path.join(dataDir, 'gestures.zip'), 'r') as zObject:
    zObject.extractall(path=dataDir)

NUM_EXAMPLES = 5
IMAGES_PATH = "/gestures"

# Get the list of labels from the list of folder names.
labels = []
for i in os.listdir(IMAGES_PATH):
    if os.path.isdir(os.path.join(IMAGES_PATH, i)):
        labels.append(i)

# Show the images.
for label in labels:
    label_dir = os.path.join(IMAGES_PATH, label)
    example_filenames = os.listdir(label_dir)[:NUM_EXAMPLES]
    fig, axs = plt.subplots(1, NUM_EXAMPLES, figsize=(10, 2))
    for i in range(NUM_EXAMPLES):
        axs[i].imshow(plt.imread(os.path.join(
            label_dir, example_filenames[i])))
        axs[i].get_xaxis().set_visible(False)
        axs[i].get_yaxis().set_visible(False)
    fig.suptitle(f'Showing {NUM_EXAMPLES} examples for {label}')

plt.show()

data = gesture_recognizer.Dataset.from_folder(
    dirname=IMAGES_PATH,
    hparams=gesture_recognizer.HandDataPreprocessingParams()
)

# Split the archive into training, validation and test dataset.
train_data, rest_data = data.split(0.8)
validation_data, test_data = rest_data.split(0.5)

# Train the model
hparams = gesture_recognizer.HParams(export_dir="model")
options = gesture_recognizer.GestureRecognizerOptions(hparams=hparams)
model = gesture_recognizer.GestureRecognizer.create(
    train_data=train_data,
    validation_data=validation_data,
    options=options
)

loss, acc = model.evaluate(test_data, batch_size=1)
print(f"Test loss:{loss}, Test accuracy:{acc}")

# Export the model bundle.
model.export_model()
