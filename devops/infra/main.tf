provider "kubernetes" {
  config_path    = "~/.kube/config"
  config_context = "minikube"
}

provider "helm" {
  kubernetes {
    config_path    = "~/.kube/config"
    config_context = "minikube"
  }
}

resource "helm_release" "app_release" {
  name       = "app-release"
  chart      = "./helm"
  namespace  = "default"
  values     = [
    "${file("./helm/values.yaml")}"
  ]
}
