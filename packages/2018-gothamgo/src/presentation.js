import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  CodePane,
  Cite,
  Deck,
  Heading,
  ListItem,
  Image,
  List,
  Quote,
  Slide,
  Text,
  Layout,
  Fill
} from "spectacle";
import CodeSlide from "spectacle-code-slide";

import FA from "@fortawesome/react-fontawesome";
import { faNpm, faTwitterSquare } from "@fortawesome/fontawesome-free-brands";
import { faCoffee } from "@fortawesome/fontawesome-free-solid";
import "./prism.css";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quartenary: "#CECECE"
  },
  {
    primary: "Inter UI",
    secondary: "Inter UI"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide
          transition={["zoom"]}
          bgColor="primary"
          notes={`JS to Go
<br/><br/>
JS is everywhere; Most JS engineers don't know how easy it is to add golang
<br/><br/>
a bit of why and a bit of how from a JS perspective
<br/><br/>
`}
        >
          <Heading size={2} caps lineHeight={1} textColor="secondary">
            JS -> Go
          </Heading>
          <div style={{ display: "flex" }}>
            <Image width="50%" height="100%" src={require("./logo-js.png")} />
            <Image width="50%" height="100%" src={require("./logo-go.png")} />
          </div>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            @chrisbiscardi
          </Heading>
          <List className="fa-ul">
            <ListItem>
              <Image
                src={require("./honey-logo.jpg")}
                width={30}
                style={{ display: "inline", left: "-54px" }}
                className="fa-li"
              />honeycomb.io
            </ListItem>
            <ListItem>
              <FA icon={faCoffee} listItem />coffee
            </ListItem>
            <ListItem>
              <FA icon={faTwitterSquare} listItem />@chrisbiscardi
            </ListItem>
          </List>
        </Slide>

        <Slide
          transition={["zoom"]}
          bgColor="primary"
          notes={`First contact with Go @Docker in 2014. Got to see some great Go engineers
<br/><br/>
DS Team at Dropbox
<br/><br/>
Honeycomb -- Observability tool; main languages Go and JS
`}
        >
          <Heading size={2} caps fit lineHeight={1} textColor="secondary">
            Why Listen to Me?
          </Heading>
          <List>
            <ListItem>Consulting</ListItem>
            <ListItem>UI Team @Docker</ListItem>
            <ListItem>Design Systems @Dropbox</ListItem>
            <ListItem>Product @Honeycomb</ListItem>
          </List>
        </Slide>

        <Slide
          transition={["zoom"]}
          bgColor="tertiary"
          notes={`In this talk:
<br/>
Why Go?
<br/><br/>
Targetted at making JS programmers believe they can and should write go
<br/><br/>
Projects Go can help you understand (Docker, k8s, cilium)
`}
        >
          <Heading size={2} caps lineHeight={1} textColor="primary">
            Why
          </Heading>
          <Image
            width="50%"
            height="100%"
            src={require("./Go-Logo_White.png")}
          />
        </Slide>

        <Slide
          transition={["fade"]}
          notes={`What is golang?
<br/><br/>
General Purpose but
Server Programming
<br/><br/>
Java/C/C++ aren't really options JS engineers look at
<br/><br/>
Faster JS with less language features
`}
        >
          <Image src={require("./golang-spectrum.jpg")} />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} fit textColor="secondary" caps>
            What is Go Useful For?
          </Heading>
          <List>
            <ListItem>Static Binaries</ListItem>
            <ListItem>Backend Services</ListItem>
            <ListItem>gRPC</ListItem>
            <ListItem>SQL DBs</ListItem>
            <ListItem>Concurrency</ListItem>
            <ListItem>Machine Code (no VM)</ListItem>
          </List>
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="tertiary"
          notes={`JS with less language features
<br/><br/>
`}
        >
          <Heading size={6} fit textColor="secondary" caps>
            What does Go Leave Out?
          </Heading>
          <List>
            <ListItem>No Classes</ListItem>
            <ListItem>No Inheritance</ListItem>
            <ListItem>No Constructors</ListItem>
            <ListItem>No Exceptions</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" notes={`es6 classes`}>
          <Heading size={6} fit textColor="secondary" caps>
            -Classes
          </Heading>
          <CodePane
            lang="js"
            source={`class Thing {
  state = { value: 0 }
  doTheThing() {
    console.log('did it')
  }
}`}
          />
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="primary"
          notes={`es6 classes from React`}
        >
          <Heading size={6} fit textColor="secondary" caps>
            -Inheritance
          </Heading>
          <CodePane
            lang="js"
            source={`class Thing extends React.Component {
  render() {
    return <div></div>
  }
}`}
          />
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="primary"
          notes={`es6 classes from React`}
        >
          <Heading size={6} fit textColor="secondary" caps>
            +Interfaces
          </Heading>
          <CodePane
            lang="go"
            source={`type Animal interface {
  Name() string
}
type Dog struct {}
func (d *Dog) Name() string {
  return “Dog”
}
func (d *Dog) Bark() {
  fmt.Println(“Woof!”)
}`}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" notes={`es6 classes`}>
          <Heading size={6} fit textColor="secondary" caps>
            -Constructors
          </Heading>
          <CodePane
            lang="js"
            source={`class Thing {
  constructor(things) {
    super(things)
    console.log('constructed');
  }
}
const T = new Thing()`}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" notes={`es6 classes`}>
          <Heading size={6} fit textColor="secondary" caps>
            +Factories
          </Heading>
          <CodePane
            lang="go"
            source={`type Thing struct {
    Name  string
    Num   int
}
func NewThing(someParameter string) *Thing {
  p := new(Thing)
  p.Name = someParameter
  p.Num = 33 // <- a very sensible default value
  return p
}`}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" notes="no exceptions">
          <Heading size={6} fit textColor="secondary" caps>
            -Exceptions
          </Heading>
          <CodePane
            lang="js"
            source={`try {
  throw new Error('my special error')
} catch (e) {
  console.log('failed')
}`}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" notes={`es6 classes`}>
          <Heading size={6} fit textColor="secondary" caps>
            +Errbacks?
          </Heading>
          <CodePane
            lang="go"
            source={`f, err := os.Open("filename.ext")
if err != nil {
    log.Fatal(err)
}
// do something with the open *File f`}
          />
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="primary"
          textColor="tertiary"
          notes={`JS with less language features
              <br/><br/>
go has 25 keywords
<br/><br/>
JS has 60 reserved words (now and future, depending on context)
              `}
        >
          <Heading size={6} fit textColor="secondary" caps>
            Go is Smol
          </Heading>
          <Text>
            break case chan const continue default defer else fallthrough for
            func go goto if import interface map package range return select
            struct switch type var
          </Text>
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="tertiary"
          notes={`You, a JS engineer, are sitting down to write your first go application`}
        >
          <Heading size={6} fit textColor="primary" caps>
            First Go App
          </Heading>
        </Slide>

        <Slide
          transition={["zoom"]}
          bgColor="tertiary"
          notes={`installation is simple. either a website download or package manager`}
        >
          <Heading size={2} caps fit lineHeight={1} textColor="secondary">
            Installation
          </Heading>
          <CodePane
            lang="markdown"
            source={`brew install nodejs

brew install golang`}
          />
        </Slide>

        <Slide
          transition={["zoom"]}
          bgColor="primary"
          notes={`main go command
<br/><br/>
documentation
<br/><br/>
prettier for go`}
        >
          <Heading size={2} caps fit lineHeight={1} textColor="secondary">
            Binaries
          </Heading>
          <List>
            <ListItem>go</ListItem>
            <ListItem>godoc</ListItem>
            <ListItem>gofmt</ListItem>
          </List>
        </Slide>

        <Slide
          transition={["zoom"]}
          bgColor="primary"
          notes={`godoc.org auto builds on demand
`}
        >
          <Heading size={2} caps fit lineHeight={1} textColor="secondary">
            godoc.org
          </Heading>
          <Text fit>
            https://godoc.org/github.com/honeycombio/honeycomb-go-magic
          </Text>
        </Slide>
        <Slide
          transition={["zoom"]}
          bgColor="primary"
          notes={`js has a lot more work to set up a raw project
<br/><br/>
or use a scaffold cra, express, yeoman
`}
        >
          <Heading size={2} caps fit lineHeight={1} textColor="secondary">
            Project Initialization (JS)
          </Heading>
          <CodePane
            lang="markdown"
            source={`mkdir my-project && cd my-project
yarn init
touch index.js
yarn add --dev jest babel babel-preset-env rollup ...`}
          />
          <CodePane
            lang="markdown"
            source={`yarn global add express-generator
express my-new-project`}
          />
        </Slide>

        <Slide
          transition={["zoom"]}
          bgColor="primary"
          notes={`mkdir $GOPATH
<br/><br/>
just start writing code
<br/><br/>
go get -- yarn global add (yields binaries)
`}
        >
          <Heading size={2} caps fit lineHeight={1} textColor="secondary">
            Project Initialization (go)
          </Heading>
          <CodePane
            lang="markdown"
            source={`mkdir $GOPATH/src/github.com/christopherbiscardi/my-project
touch main.go
go build
go test`}
          />
          <CodePane
            lang="markdown"
            source={`go get github.com/spf13/cobra/cobra
cobra init github.com/christopherbiscardi/my-new-cli`}
          />
        </Slide>

        <Slide
          transition={["zoom"]}
          bgColor="primary"
          notes={`go comes with commands for testing, etc
<br/><br/>
gofmt is prettier
fix is codemods
<br/><br/>
most relevant are go build and go run for just getting started`}
        >
          <Heading size={2} lineHeight={1} textColor="secondary">
            go
          </Heading>
          <CodePane
            lang="markdown"
            source={`build       compile packages and dependencies
clean       remove object files and cached files
doc         show documentation for package or symbol
env         print Go environment information
bug         start a bug report
fix         update packages to use new APIs
fmt         gofmt (reformat) package sources
generate    generate Go files by processing source
get         download and install packages and dependencies
install     compile and install packages and dependencies
list        list packages
run         compile and run Go program
test        test packages
tool        run specified go tool
version     print Go version
vet         report likely mistakes in packages`}
          />
        </Slide>

        <Slide
          transition={["zoom"]}
          bgColor="primary"
          notes={`dependency management?
<br/><br/>
dep is most like yarn/npm
<br/><br/>
Possibly vgo in the future
`}
        >
          <Heading size={2} lineHeight={1} textColor="secondary">
            dep
          </Heading>
          <CodePane
            lang="markdown"
            source={`$ brew install dep
$ dep init
$ ls
Gopkg.toml Gopkg.lock vendor/
$ dep ensure
$ dep ensure -add github.com/pkg/errors`}
          />
        </Slide>

        <Slide
          transition={["zoom"]}
          bgColor="tertiary"
          notes={`express vs muxes`}
        >
          <Heading size={2} caps fit lineHeight={1} textColor="primary">
            Our First API
          </Heading>
        </Slide>

        <Slide
          transition={["zoom"]}
          bgColor="primary"
          notes={`middleware, app.use, etc`}
        >
          <Heading size={2} caps lineHeight={1} textColor="secondary">
            express
          </Heading>
          <CodePane
            lang="js"
            source={`var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});`}
          />
        </Slide>

        <Slide
          transition={["zoom"]}
          bgColor="primary"
          notes={`stdlib is strong
<br/><br/> 
net/http is really all you need
<br/><br/>
r.URL.Path is kinda hacky`}
        >
          <Heading size={2} lineHeight={1} textColor="secondary">
            go net/http
          </Heading>
          <CodePane
            lang="go"
            source={`package main

import (
    "fmt"
    "log"
    "net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hi there, I love %s!", r.URL.Path[1:])
}

func main() {
    http.HandleFunc("/", handler)
    log.Fatal(http.ListenAndServe(":8080", nil))
}`}
          />
        </Slide>

        <Slide
          transition={["zoom"]}
          bgColor="primary"
          notes={`gorilla multiplexer
<br/><br/>
extras:
name title and page
<br/><br/>
more familiar to express, etc users`}
        >
          <Heading size={2} lineHeight={1} textColor="secondary">
            gorilla/mux
          </Heading>
          <CodePane
            lang="go"
            source={`import ( "github.com/gorilla/mux" )

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/books/{title}/page/{page}", func(w http.ResponseWriter, r *http.Request) {
		vars := mux.Vars(r)
		title := vars["title"]
		page := vars["page"]

	  fmt.Fprintf(w, "requested book: %s on page %s\n", title, page)
	})

	http.ListenAndServe(":80", r)
}`}
          />
        </Slide>

        <Slide
          transition={["zoom"]}
          bgColor="primary"
          notes={`
              process.env
<br/><br/>
cosmicconfig package.json, .config.js, .rc
<br/><br/>
vs viper: nothing in JS land quite as good as viper
              `}
        >
          <Heading size={2} caps fit lineHeight={1} textColor="secondary">
            Configuration
          </Heading>
          <CodePane
            lang="js"
            source={`if(process.env.SQL_DB_URL) {
  // connect to db
}`}
          />
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="secondary"
          textColor="primary"
          notes={`where the system origins of go really become obvious
<br/><br/>
supports JSON, TOML, YAML, HCL, and Java properties config files
<br/><br/>
live watching and re-reading of config files (optional)
<br/><br/>
reading from remote config systems (etcd or Consul), and watching changes
<br/><br/>
reading from command line flags (with cobra)`}
        >
          <BlockQuote>
            <Quote>
              Viper is a complete configuration solution for Go applications ...
              and can handle all types of configuration needs and formats.{" "}
            </Quote>
            <Cite>viper docs</Cite>
          </BlockQuote>
        </Slide>

        <Slide
          transition={["zoom"]}
          bgColor="primary"
          notes={`simple example. get an env var`}
        >
          <Heading size={2} caps fit lineHeight={1} textColor="secondary">
            Read env var
          </Heading>

          <CodePane
            lang="go"
            source={`SetEnvPrefix("spf") // will be uppercased automatically
BindEnv("id")

id := Get("id") // SPF_ID`}
          />
        </Slide>

        <Slide
          transition={["zoom"]}
          bgColor="primary"
          notes={`complex example: continuously watch etcd for config changes
<br/><br/>
new syntax: goroutines
<br/><br/>`}
        >
          <CodePane
            lang="go"
            source={`var runtime_viper = viper.New()
runtime_viper.AddRemoteProvider("etcd", "http://127.0.0.1:4001", "/config/hugo.yml")
runtime_viper.SetConfigType("yaml")
err := runtime_viper.ReadRemoteConfig()
runtime_viper.Unmarshal(&runtime_conf)

// open a goroutine to watch remote changes forever
go func(){
	for {
	    time.Sleep(time.Second * 5) // delay after each request

          err := runtime_viper.WatchRemoteConfig()
	    if err != nil {
	        log.Errorf("unable to read remote config: %v", err)
	        continue
	    }

	    runtime_viper.Unmarshal(&runtime_conf)
	}
}()`}
          />
        </Slide>
        <Slide
          transition={["zoom"]}
          bgColor="tertiary"
          notes={`
              knex vs database/sql and sqlx
              <br/><br/>
              bookshelf vs gorm
              `}
        >
          <Heading size={2} caps fit lineHeight={1} textColor="secondary">
            Talking to Databases
          </Heading>
        </Slide>
        <Slide
          transition={["zoom"]}
          bgColor="primary"
          notes={`knex; widely used sql query builder`}
        >
          <Heading size={2} caps lineHeight={1} textColor="secondary">
            knex
          </Heading>

          <CodePane
            lang="js"
            source={`knex('users').where({
  first_name: 'Test',
  last_name:  'User'
}).select('id')`}
          />
          <CodePane
            lang="markdown"
            source="Outputs:\n\n
              select `id` from `users` where `first_name` = 'Test' and `last_name` = 'User'"
          />
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary" notes={`stdlib!`}>
          <Heading size={2} caps fit lineHeight={1} textColor="secondary">
            database/sql
          </Heading>
          <CodePane
            lang="go"
            source={`var age int64
row := db.QueryRow("SELECT age FROM users WHERE name = $1", name)
err := row.Scan(&age)`}
          />
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary" notes={`stdlib!`}>
          <Heading size={2} caps fit lineHeight={1} textColor="secondary">
            jmoiron/sqlx
          </Heading>
          <CodePane
            lang="go"
            source={`type Person struct {
    FirstName string \`db:"first_name"\`
    LastName  string \`db:"last_name"\`
    Email     string
}
people := []Person{}
db.Select(&people, "SELECT * FROM person ORDER BY first_name ASC")
jason, john := people[0], people[1]
fmt.Printf("%#v\\n%#v", jason, john)
// Person{FirstName:"Jason", LastName:"Moiron", Email:"jmoiron@jmoiron.net"}
// Person{FirstName:"John", LastName:"Doe", Email:"johndoeDNE@gmail.net"}`}
          />
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary" notes={`stdlib!`}>
          <Heading size={2} caps fit lineHeight={1} textColor="secondary">
            bookshelf
          </Heading>
          <CodePane
            lang="js"
            source={`User.where("id", 1)
  .fetch({ withRelated: ["posts.tags"] })
  .then(function(user) {
    console.log(user.related("posts").toJSON());
  })
  .catch(function(err) {
    console.error(err);
  });`}
          />
        </Slide>
        <CodeSlide
          bgColor="#c7eafc"
          lang="go"
          ranges={[
            { loc: [0, 270], title: "gorm" },
            { loc: [0, 1] },
            { loc: [2, 6] },
            { loc: [4, 5], note: "imported for side-effects" },
            { loc: [7, 12], note: "embed interface" },
            { loc: [14, 18] },
            { loc: [18, 19], note: "defer until end of function" },
            { loc: [20, 22] },
            { loc: [23, 25] },
            { loc: [26, 31] },
            { loc: [32, 37] }
          ]}
          code={`package main

import (
  "github.com/jinzhu/gorm"
  _ "github.com/jinzhu/gorm/dialects/sqlite"
)

type Product struct {
  gorm.Model
  Code string
  Price uint
}

func main() {
  db, err := gorm.Open("sqlite3", "test.db")
  if err != nil {
    panic("failed to connect database")
  }
  defer db.Close()

  // Migrate the schema
  db.AutoMigrate(&Product{})

  // Create
  db.Create(&Product{Code: "L1212", Price: 1000})

  // Read
  var product Product
  // find product with id 1
  db.First(&product, 1)
  db.First(&product, "code = ?", "L1212")

  // Update - update product's price to 2000
  db.Model(&product).Update("Price", 2000)

  // Delete - delete product
  db.Delete(&product)
}`}
        />

        <Slide
          transition={["zoom"]}
          bgColor="tertiary"
          notes={`So we've got an API that talks to a database, how do we get it into the world?
<br/><br/>`}
        >
          <Heading size={2} caps fit lineHeight={1} textColor="secondary">
            Build & Deploy
          </Heading>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary" notes={`static builds`}>
          <Heading size={2} caps fit lineHeight={1} textColor="secondary">
            static builds
          </Heading>
          <CodePane
            lang="markdown"
            source={`CGO_ENABLED=0 go build -a -ldflags '-extldflags "-static"' .`}
          />
          <CodePane
            lang="markdown"
            source={`CGO_ENABLED=0 GOOS=windows GOARCH=386 go build -a -ldflags '-extldflags "-static"' .`}
          />
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary" notes={`~700mb`}>
          <Heading size={2} caps fit lineHeight={1} textColor="secondary">
            Containerized
          </Heading>
          <CodePane
            lang="markdown"
            source={`FROM golang:1.10

WORKDIR /go/src/github.com/christopherbiscardi/my-project
COPY . /go/src/github.com/christopherbiscardi/my-project
RUN go install
ENTRYPOINT "my-project"`}
          />
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary" notes={`~6mb`}>
          <Heading size={2} caps fit lineHeight={1} textColor="secondary">
            Containerized
          </Heading>
          <CodePane
            lang="markdown"
            source={`FROM scratch
COPY ./my-project /opt/my-project
ENTRYPOINT ["/opt/my-project"]
`}
          />
          <CodePane
            lang="markdown"
            source={`docker build -t my-container .
docker run -itp 8080:8080 my-container`}
          />
        </Slide>

        <Slide
          transition={["zoom"]}
          bgColor="tertiary"
          notes={`But where does all this get us?
<br/><br/>
build robust services...
<br/><br/>
and opens up a world of awesome new projects
<br/><br/>
k8s, docker, cilium, etc`}
        >
          <Heading size={2} caps fit lineHeight={1} textColor="secondary">
            Exploration
          </Heading>
        </Slide>

        <Slide transition={["zoom"]} bgColor="tertiary" notes={``}>
          <Image src={require("./cilium-arch.png")} />
        </Slide>

        <CodeSlide
          bgColor="#c7eafc"
          lang="go"
          ranges={[
            { loc: [0, 270], title: "cilium/cmd/kvstore.go" },
            { loc: [14, 15] },
            { loc: [16, 22] },
            { loc: [23, 28] },
            { loc: [26, 27], note: "make initializes reference type" },
            { loc: [29, 34] },
            { loc: [35, 36], note: "first function in file" },
            { loc: [63, 64], note: "second function in file" },
            { loc: [64, 68] },
            { loc: [34, 42] }
          ]}
          code={`// Copyright 2018 Authors of Cilium
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package cmd

import (
	"github.com/cilium/cilium/pkg/kvstore"
	"github.com/cilium/cilium/pkg/option"

	"github.com/spf13/cobra"
)

var (
	recursive   bool
	kvStore     string
	kvStoreOpts = make(map[string]string)
)

// kvstoreCmd represents the bpf command
var kvstoreCmd = &cobra.Command{
	Use:   "kvstore",
	Short: "Direct access to the kvstore",
}

func setupKvstore() {
	if kvStore == "" || len(kvStoreOpts) == 0 {
		resp, err := client.ConfigGet()
		if err != nil {
			Fatalf("Unable to retrieve cilium configuration: %s", err)
		}
		if resp.Status == nil {
			Fatalf("Unable to retrieve cilium configuration: empty response")
		}

		cfgStatus := resp.Status

		if kvStore == "" {
			kvStore = cfgStatus.KvstoreConfiguration.Type
		}

		if len(kvStoreOpts) == 0 {
			for k, v := range cfgStatus.KvstoreConfiguration.Options {
				kvStoreOpts[k] = v
			}
		}
	}

	if err := kvstore.Setup(kvStore, kvStoreOpts); err != nil {
		Fatalf("Unable to setup kvstore: %s", err)
	}
}

func init() {
	rootCmd.AddCommand(kvstoreCmd)
	flags := kvstoreCmd.PersistentFlags()
	flags.StringVar(&kvStore, "kvstore", "", "kvstore type")
	flags.Var(option.NewNamedMapOptions("kvstore-opts", &kvStoreOpts, nil), "kvstore-opt", "kvstore options")
}`}
        />
      </Deck>
    );
  }
}

/* <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
   * <BlockQuote>
   * <Quote>Example Quote</Quote>
   * <Cite>Author</Cite>
   * </BlockQuote>
   * </Slide>*/
