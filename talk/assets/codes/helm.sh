#!/bin/bash

helm repo add weaveworks https://weaveworks.github.io/flux

helm install --name flux \
--set rbac.create=true \
--set helmOperator.create=true \
--set git.url=ssh://git@github.com/snahelou/demo-gitops-helm \
--set git.label=flux-custom \
--set git.branch=empty \
--set registry.pollInterval="1m" \
--namespace flux \
weaveworks/flux

sleep 15

kubectl -n flux logs deployment/flux | grep identity
