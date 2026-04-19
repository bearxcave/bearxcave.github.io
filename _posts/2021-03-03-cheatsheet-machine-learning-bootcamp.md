---
layout:     post
title:      Machine learning note
date:       2021-03-03
author:     Bearx
header-img: img/post-bg-grand-canyon.jpg
catalog: true
tags:
    - note
    - machine learning
---

### List of PDF cheatsheets

* python: [python](https://github.com/bearxcave/bearxcave.github.io/blob/master/img/cheatsheet/cheat%20sheet%20python.pdf)
* importing data: [importing](https://github.com/bearxcave/bearxcave.github.io/blob/master/img/cheatsheet/cheat%20sheet%20importing%20data.pdf)
* pandas: [pandas](https://github.com/bearxcave/bearxcave.github.io/blob/master/img/cheatsheet/cheat%20sheet%20pandas.pdf)
* plotly: [plotly](https://github.com/bearxcave/bearxcave.github.io/blob/master/img/cheatsheet/cheat%20sheet%20plotly.pdf)
* ggplot2: [ggplot2](https://github.com/bearxcave/bearxcave.github.io/blob/master/img/cheatsheet/cheat%20sheet%20ggplot2.pdf)
* scikit-learn: [sklearn](https://github.com/bearxcave/bearxcave.github.io/blob/master/img/cheatsheet/cheat%20sheet%20scikit-learn.pdf)
* keras: [keras](https://github.com/bearxcave/bearxcave.github.io/blob/master/img/cheatsheet/cheat%20sheet%20keras.pdf)
* PySpark: [PySpark](https://github.com/bearxcave/bearxcave.github.io/blob/master/img/cheatsheet/cheat%20sheet%20PySpark.pdf)
* spaCy: [spaCy](https://github.com/bearxcave/bearxcave.github.io/blob/master/img/cheatsheet/cheat%20sheet%20spaCy.pdf)

### Basic

Data is often split into 3 sets:

* Training data
* Validation data
* Test data

Classification error metrics:

* Accuracy
* Recall
* Precision
* F1-Score : $2 \frac{\mathrm{precision}*\mathrm{recall}}{\mathrm{precision}+\mathrm{recall}}$

Confusion matrix:

|                    | Prediction positive | Prediction negative |
|:------------------:|:-------------------:|:-------------------:|
| Condition positive | True positive (TP)  | False negative (FN) |
| Condition negative | False positive (FP) | True negative (TN)  |

Regression error metrics:

* Mean absolute error (MAE): easy to be affected by large errors
* Mean square error (MSE)
* Root Mean Squared Error (RMSE)

Bias variance trade-off:

* underfitting: high bias, low variance
* overfitting: low bias, high variance

### Linear Regression

### Logistic Regression

### K-Nearest Network (KNN)

Training algorithm:

1. Store all the data

Prediction algorithm:

1. Calculate the distance from x to all points in the data
2. Sort the distances
3. Predict the majority label of the "k" closest points

### Tree Methods

* Decision Tree
* Random forest

### Support Vector Machine (SVM)

### K Means Clustering

Algorithm:

1. Choose a number of Clusters "K"
2. Randomly assign each point to a cluster
3. Repeat the following until converged:
    * For each cluster, compute the cluster centroid by taking the mean vector of points in the cluster
    * Assign each point to the cluster for which the centroid is the closest

Elbow method (to estimate K):

1. Compute the sum of squared error (SSE) for a list of K's: $ W(C_k) = \frac{1}{\mid C_k \mid} \sum_{i,i'\in C_k} \mid x_i - x_{i'} \mid^2 $, where $ C_k $ is denotes the number of observations in the *k*th cluster
2. Plot SSE against K, and figure out the elbow point

### Principal Component Analysis (PCA)

### Recommender System

Two most common types:
1. Content-Based
2. Collaborative Filtering (CF)

### Natural Language Processing (NLP)

Bag of Words: Document represented as a vector of word counts

Term Frequency - Inverse Document Frequency (TF-IDF): 
1. TF(d,t): Numbers of occurences of term t in document d -> Importance of the term within that document
2. IDF(t)=log(D/t): -> Importance of the term in the corpus
    - D = Total number of documents
    - t = Numbers of documents with the term

Process:
1. Data Visualization
2. Text Pre-processing
3. Continuing Normalization
4. Vectorization
5. Training a model
6. Model Evaluation
7. Train Test Split
8. Creating a Data Pipeline

### Neural Nets and Deep Learning

Perceptron model

Activation functions and their pros & cons:
1. Step function:
2. Sigmoid function (Logistic function):
3. Hyperbolic function:
4. Rectified Linear unit (ReLu):

Multi-Class activation functions:


### Big Data and Spark
