#!/bin/bash

kubectl -n kube-system create sa tiller

kubectl create clusterrolebinding tiller-cluster-rule \
    --clusterrole=cluster-admin \
    --serviceaccount=kube-system:tiller

helm init --skip-refresh --upgrade --service-account tiller

sleep 15

helm repo add weaveworks https://weaveworks.github.io/flux

helm install --name flux \
--set helmOperator.create=true \
--set git.url=ssh://git@github.com/snahelou/demo-gitops-helm \
--set helmOperator.git.chartsPath=charts \
--namespace flux \
weaveworks/flux

sleep 15
kubectl -n flux logs deployment/flux | grep identity.pub | cut -d '"' -f2

