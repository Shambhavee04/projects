import pandas as pd
import numpy as np
dataset = pd.read_csv(r"loan payments data.csv")
print(dataset.head(10))  
print(dataset.tail(10))
print(dataset.isnull())
print(dataset.shape)
print(dataset.shape[0])
print(dataset.shape[1])
print(dataset.notnull())
print(dataset.isnull().sum())
print(dataset.isnull().sum().sum())
print(dataset.isnull().sum()/dataset.shape[0]* 100)
print(dataset.isnull().sum()/dataset.shape[0]*dataset.shape[1]  * 100)
print(dataset.isnull().sum().sum()/(dataset.shape[0]*dataset.shape[1])  * 100)
import matplotlib.pyplot as plt
import seaborn as sns
sns.heatmap(dataset.isnull())
plt.show()