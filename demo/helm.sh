#!/bin/bash

git push --delete origin flux-custom

kubectl -n kube-system create sa tiller

kubectl create clusterrolebinding tiller-cluster-rule \
    --clusterrole=cluster-admin \
    --serviceaccount=kube-system:tiller

helm init --skip-refresh --upgrade --service-account tiller

sleep 10

helm repo add weaveworks https://weaveworks.github.io/flux

helm install --name flux \
--set rbac.create=true \
--set helmOperator.create=true \
--set git.url=ssh://git@github.com/snahelou/demo-gitops-helm \
--set git.label=flux-custom \
--set git.branch=master2 \
--set registry.pollInterval="1m" \
--namespace flux \
weaveworks/flux

sleep 15

kubectl -n flux logs deployment/flux | grep identity.pub | cut -d '"' -f2

