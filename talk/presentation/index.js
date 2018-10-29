// Import React
import React from "react";
import CodeSlide from "spectacle-code-slide";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Appear,
  Text,
  Link,
  Image,
  S,
  Notes
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import "prismjs/themes/prism-okaidia.css";

// Require CSS
require("normalize.css");
const theme = createTheme(
  {
    primary: "#222",
    secondary: "white",
    tertiary: "white",
    quaternary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);
import "./index.css";

const images = {
  k8s: require("../assets/images/kubernetes.png"),
  pipeline: require("../assets/images/pipeline.png"),
  todobackend: require("../assets/images/todobackend.png"),
  todobackendgitops: require("../assets/images/gitops.svg"),
  dieux: require("../assets/images/dieux.png"),
  tree: require("../assets/images/chart.png"),
  pipeline2: require("../assets/images/typical-pipeline.png"),
  nope: require("../assets/images/maxresdefault.jpg"),
  cipipeline: require("../assets/images/CI_pipeline.png"),
  gitopspipeline: require("../assets/images/gitops_pipeline.png"),
  questions: require("../assets/images/question.jpg"),
  gitopsdemo: require("../assets/images/gitops-demo.png"),
  helmgithub: require("../assets/images/helmgithub.png")
};

function getImage(img) {
  return images[img].replace("/", "");
}

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading caps textColor="secondary" >
            <Image src={getImage("k8s")} style="display: inline-block;vertical-align:bottom;width:12%;margin-bottom: 0px;margin-right:3px;border:0px;box-shadow:0 0 0px" />
            Kubernetes
          </Heading>
          <Text textColor="quaternary" textSize="2em" margin="60px 0 0 0" bold>
            CI/CD, myth AND reality...
          </Text>
          <Text textColor="quaternary" textSize="1em" margin="24px 0 0 0">
            @snahelouz & @gregoirew5
          </Text>
          <Notes>
            <br/>L'idée de se talk, c'est de présenter une petite partie du cycle de vie d'une appli dans un cluster Kubernetes.
            <br/>
            <br/>Qui fait de la CI avec Jenkins avec en dernière step de son pipeline un "deploy" ?
            <br/>
            <br/>L'idée c'est de vous proposer comment on peut faire ce déploiement sous kubernetes, voir même supprimer cette dernière étape.
          </Notes>
        </Slide>

        <Slide transition={["fade"]}
          bgSize="85%"
          bgRepeat="no-repeat"
          bgImage="https://landscape.cncf.io/images/landscape.png" >
          <Notes>
            <br/>Focus sur Application definion / Continuous integration et Scheduling orchestration.
          </Notes>
        </Slide>

        <Slide transition={["fade"]}>
          <Heading caps textFont="primary" textColor="secondary">♥️ pipelines</Heading>
          <List>
            <Appear><ListItem>Time To Market</ListItem></Appear>
            <Appear><ListItem>Teamwork and Collaboration</ListItem></Appear>
            <Appear><ListItem>Reduced risks and costs of development</ListItem></Appear>
            <Appear><ListItem>Rapid feedback</ListItem></Appear>
            <Appear><ListItem>Fail-fast</ListItem></Appear>
            <Appear><ListItem>End-to-end security</ListItem></Appear>
          </List>
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="white"
          bgSize="100%"
          bgRepeat="no-repeat"
          bgImage="https://docs.gitlab.com/ee/ci/img/cicd_pipeline_infograph.png">
          <Link
            style="position: relative;bottom:-300px"
            textColor="quaternary"
            textSize="1em"
            margin="24px 0 0 0"
            href="https://docs.gitlab.com/ee/ci/">
            docs.gitlab.com/ee/ci/
          </Link>
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="white"
          bgSize="90%"
          bgRepeat="no-repeat"
          bgImage={getImage("pipeline")}>
          <Link
            style="position: relative;bottom:-300px"
            textColor="quaternary"
            textSize="15px"
            margin="24px 0 0 0"
            href="https://hackernoon.com/the-best-architecture-with-docker-and-kubernetes-myth-or-reality-77b4f8f3804d">
            the-best-architecture-with-docker-and-kubernetes-myth-or-reality
          </Link>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading fill caps textColor="secondary">
            It works on my machine!
          </Heading>
        </Slide>

        <Slide
          transition={["fade"]}
          bgSize="70%"
          bgRepeat="no-repeat"
          bgImage={getImage("todobackend")}
        />

        <Slide
          transition={["fade"]}
          bgSize="68%"
          bgRepeat="no-repeat"
          bgImage={getImage("todobackendgitops")}
        >
          <Notes>
            <br/> Présentation repo Git
            <br/> Demo local
            <br/> Kubernetes object
            <br/> CircleCI
          </Notes>
        </Slide>

        <CodeSlide
          transition={["fade"]}
          lang="jsx"
          textSize=".775em"
          code={require("raw-loader!../assets/codes/middle-deployment-yaml")}
          ranges={[
            {
              loc: [0, 2],
              title: "middle-deployment.yaml"
            },
            {
              loc: [2, 7],
            },
            {
              loc: [8, 9],
            },
            {
              loc: [20, 23],
            },
            {
              loc: [23, 30],
            },
            {
              loc: [30, 44],
            }
          ]}
        />

        <CodeSlide
          transition={["fade"]}
          lang="jsx"
          textSize=".775em"
          code={require("raw-loader!../assets/codes/middle-service-yaml")}
          ranges={[
            {
              loc: [0, 2],
              title: "middle-service.yaml"
            },
            {
              loc: [2, 6],
            },
            {
              loc: [7, 12],
            },
            {
              loc: [12, 14],
            },
            {
              loc: [14, 15],
            }
          ]}
        />



        <Slide transition={["fade"]}>
          <Heading size={3} caps textFont="primary" textColor="secondary">Whats happend if...</Heading>
          <List margin="30px 0 0 0" >
            <Appear><ListItem margin="20px 0 0 0">I want more scale in production?</ListItem></Appear>
            <Appear><ListItem margin="20px 0 0 0">I want to change image version?</ListItem></Appear>
            <Appear><ListItem margin="20px 0 0 0">I want to switch from Redis to PGSQL?</ListItem></Appear>
            <Appear><Heading margin="100px 0 0 0" textColor="secondary" size={5} > We need a deployment template! </Heading></Appear>
          </List>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} caps textColor="secondary" >
            <Image src="https://www.helm.sh/assets/images/helm-logo.svg" size={1} style="display: inline-block;vertical-align:bottom;width:12%;margin-bottom: 0px;margin-right:3px;border:0px;box-shadow:0 0 0px" />
            HELM
          </Heading>
          <Image src={getImage("helmgithub")} style="vertical-align:bottom;width:52%" />
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={4} caps textFont="primary" textColor="secondary">Managing ressources as a single unit</Heading>
          <List>
            <ListItem>Customizations</ListItem>
            <ListItem>Reuse ressources</ListItem>
            <ListItem>Manage app lifecycles</ListItem>
            <ListItem>History</ListItem>
            <ListItem>Rollback</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} style="padding:unset">
          <Heading caps textFont="primary" textColor="secondary">Helm chart</Heading>
          <List style="display: inline-block;vertical-align:center;margin-top: 160px;">
            <ListItem>Metadatas</ListItem>
            <ListItem>K8S Templates</ListItem>
            <ListItem>Default values</ListItem>
            <ListItem>Dependencies</ListItem>
            <ListItem>Documentation</ListItem>
          </List>
          <Image src={getImage("tree")}  style="margin-top: 60px;margin-left: 60px;display: inline-block;vertical-align:top;width:50%"/>

        </Slide>

        <CodeSlide
          transition={["fade"]}
          lang="jsx"
          textSize=".775em"
          code={require("raw-loader!../assets/codes/helm-middle-deployment-yaml")}
          ranges={[
            {
              loc: [0, 1],
              title: "helm-middle-deployment.yaml"
            },
            {
              loc: [9, 10],
            },
            {
              loc: [21, 22],
            }
          ]}
        />
        <CodeSlide
          transition={["fade"]}
          lang="jsx"
          textSize=".775em"
          code={require("raw-loader!../assets/codes/values-yaml")}
          ranges={[
            {
              loc: [0, 100],
              title: "values.yaml"
            }
          ]}
        />

        <Slide
          transition={["fade"]}
          bgSize="110%"
          bgRepeat="no-repeat"
          bgImage={getImage("dieux")}
        />

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps textColor="secondary">
            CICD Pipeline
          </Heading>
          <Notes>
            <br/> Maintenant qu'on sait comment bien packager son appli, on va voir comment on peut l'envoyer efficacement en staging puis en prod.
          </Notes>
        </Slide>

        <Slide transition={["fade"]}>
          <Image src={getImage("pipeline2")} margin="16px auto" style="display: inline-block;width:200%;vertical-align:middle;border:0px;background-color:#D211D8;box-shadow:0 0 0px"/>
          <Notes>
            <br/> Pas de piege, combien d'entre vous ont se genre de pipeline?
            <br/>
            <br/> Avec gregoire on sait dit:"facile, on a juste qu'a remplacer rancher deploy par k8s deploy..."
          </Notes>
        </Slide>

        <CodeSlide
          transition={["fade"]}
          lang="jsx"
          textSize=".775em"
          code={require("raw-loader!../assets/codes/pipeline")}
          ranges={[
            {
              loc: [7, 8],
              title: "Jenkinsfile"
            },
            {
              loc: [13, 17],
            },
            {
              loc: [8, 11],
            }
          ]}
        />

        <Slide
          transition={["fade"]}
          bgSize="110%"
          bgRepeat="no-repeat"
          bgImage={getImage("nope")}
        />

          <Slide transition={["fade"]}>
            <Heading caps textFont="primary" textColor="secondary">Shit Happens</Heading>
            <List>
              <Appear><ListItem>Credentials?</ListItem></Appear>
              <Appear><ListItem>Multiple Git repos?</ListItem></Appear>
              <Appear><ListItem>Security?</ListItem></Appear>
              <Appear><ListItem>Recovery?</ListItem></Appear>
              <Appear><ListItem>Complexity</ListItem></Appear>
            </List>
            <Notes>
              <br/> security: 1. Qui a le droit de pousser, et 2 qui s'assure qu'on vient pas écraser l'appli d'un autre (via label par exemple)
              <br/>
              <br/> Recovery: si je perds mon cluster, comment je retrouve les infos? comment je le remonte facilement?
              <br/>
              <br/> Avec Gregoire on a un peu creuser justement pour voir comment palier a tous ses problèmes qu'on rencontre au quotidien...
              <br/>
              <br/> Et on est tombé sur le concept de push pipeline vs pull pipeline
            </Notes>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading textAlign="left" caps textColor="secondary">
              Push Pipeline
              Pull Pipeline
            </Heading>
            <Text textAlign="left" textColor="tertiary" margin="12px 0 0 0" bold>
              by <Link href="https://www.weave.works/">Weave.works</Link>
            </Text>
            <Notes>
              <br/>Ops: Combien d'entre vous utilise puppet ou ansible?
              <br/>C'est le même constant coté CI/CD... On peut soit push en one shoot la config (ansible), soit avoir un process qui s'assure de l'état souhaité (puppet)
              <br/>
              <br/>Ici c'est pareil avec la notion de GitOps.
              <br/>Le GitOps c'est un concept crée par weaveworks. 2 mots sur weave, c'est une boite qui fournit un echosystem complet autour de k8s.
              <br/>
              <br/> Elle fournit bcp d'outils opensource comme weave net (network driver), weave scope (UI) et weave flux dont on va parler aujourd'hui
            </Notes>
          </Slide>

          <Slide transition={["fade"]}>
            <Image src={getImage("cipipeline")} size={1} style="display: inline-block;width:100%; vertical-align:middle;margin-bottom: 30px;margin-top: 0px;border:0px;background: white" />
            <List>
              <ListItem textSize="1.2em">How to maintain credentials?</ListItem>
              <ListItem textSize="1.2em">How to rollback without rebuilding?</ListItem>
              <ListItem textSize="1.2em">How to ensure that running version is right?</ListItem>
            </List>
          </Slide>

          <Slide transition={["fade"]}>
            <Image src={getImage("gitopspipeline")} size={1} style="display: inline-block;vertical-align:middle;margin-bottom: 30px;margin-top: 0px;border:0px;background: white" />
            <List>
              <Appear><ListItem textSize="1.2em">More secure. No credential.</ListItem></Appear>
              <Appear><ListItem textSize="1.2em">No link between CI & CD.</ListItem></Appear>
              <Appear><ListItem textSize="1.2em">Faster Mean Time to Deployment</ListItem></Appear>
              <Appear><ListItem textSize="1.2em">Faster Mean Time to Recovery</ListItem></Appear>
              <Appear><ListItem textSize="1.2em">Stable and reproducible rollbacks</ListItem></Appear>
            </List>
            <Appear><Link textSize="24px" href="www.weave.works/blog/kubernetes-anti-patterns-let-s-do-gitops-not-ciops">www.weave.works/blog/kubernetes-anti-patterns-let-s-do-gitops-not-ciops</Link></Appear>
            <Notes>
              <br/>Le GitOps c'est l'idée de se dire que toutes les infos sont dans Git. (c'est une extension de l'infra as code...)
              <br/>Comment ça fonctionne? On reprend un pipeline de CI classique sur n'importe quel outils. On enleve la partie CD... Simplification
              <br/>Ensuite on vient ajouter un operateur sur notre cluster qui va s'assurer de la synchro via une boucle de reconciliation. (ici FLux)
              <br/>
              <br/>On peut encore aller plus loin, ici on doit modifier le git manuellement... moi j'aimerai que mon operateur déploie toujours les dernieres images dispo (en fonction d'un tag)
            </Notes>
          </Slide>

          <Slide
            transition={["fade"]}
            bgSize="85%"
            bgRepeat="no-repeat"
            bgImage={getImage("gitopsdemo")}
          />

          <CodeSlide
            transition={["fade"]}
            lang="jsx"
            textSize=".775em"
            code={require("raw-loader!../assets/codes/helm.sh")}
            ranges={[
              {
                loc: [2, 13],
              }
            ]}
          />

          <CodeSlide
            transition={["fade"]}
            lang="jsx"
            textSize=".775em"
            code={require("raw-loader!../assets/codes/prod-yaml")}
            ranges={[
              {
                loc: [1, 3],
                title: "prod-deployment.yaml"
              },
              {
                loc: [11, 22],
              },
              {
                loc: [6, 10],
              }
            ]}
          />

          <Slide
            transition={["fade"]}
            bgSize="110%"
            bgRepeat="no-repeat"
            bgImage={getImage("dieux")}
          >
            <Notes>
              <br/>
            </Notes>
          </Slide>

          <Slide transition={["fade"]}>
            <Heading caps textColor="secondary">Next steps</Heading>
            <List style="list-style-position: unset" >
              <Appear><ListItem margin="20px 0 0 0" textSize="1.2em">If a change is released automatically how do we know it really worked?</ListItem></Appear>
              <Appear><ListItem margin="20px 0 0 0" textSize="1.2em">I can manage all my K8s config in git, except Secrets. <Link href="https://github.com/bitnami-labs/sealed-secrets">[bitnami]</Link></ListItem></Appear>
              <Appear><ListItem margin="20px 0 0 0" textSize="1.2em">How can I distribute charts using repos?<Link href="https://github.com/weaveworks/flux/issues/1278"> [1278]</Link></ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading fit caps textColor="secondary">
              Ressources
            </Heading>
            <List style="list-style-position: unset" >
              <ListItem margin="20px 0 0 0" textSize="1em"><Link href="https://helm.sh">helm.sh</Link></ListItem>
              <ListItem margin="20px 0 0 0" textSize="1em"><Link href="https://www.weave.works/blog/kubernetes-anti-patterns-let-s-do-gitops-not-ciops">kubernetes-anti-patterns-let-s-do-gitops-not-ciops</Link></ListItem>
              <ListItem margin="20px 0 0 0" textSize="1em"><Link href="https://github.com/weaveworks/flux">github.com/weaveworks/flux</Link></ListItem>
              <ListItem margin="20px 0 0 0" textSize="1em"><Link href="https://github.com/snahelou/demo-gitops-helm">github.com/snahelou/demo-gitops-helm</Link></ListItem>
            </List>
            <Notes>
              <br/>
            </Notes>
          </Slide>

          <Slide
            transition={["fade"]}
            bgSize="100%"
            bgRepeat="no-repeat"
            bgImage={getImage("questions")}
          />
      </Deck>
    );
  }
}
