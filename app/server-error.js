var express = require('express');
var uuid = require('uuid');
var graphqlHTTP = require('express-graphql');
var Graphql  = require('graphql');
var fakeDatabase = require('./fakedata.js');

var app = express();
var id = uuid.v4();
var port = 3000;

var geoType = new Graphql.GraphQLObjectType({ //Object타입 정의
        name: "geo",
        fields:{  //데이터 형태를 정의
                lat: {type: Graphql.GraphQLFloat},
                lng: {type: Graphql.GraphQLFloat}
        }
});

var companyType = new Graphql.GraphQLObejctType({
        name: "company",
        fields:{
                name: {type: Graphql.GraphQLString},
                catchPhrase: {type: Graphql.GraphQLString},
                bs: {type: Graphql.GraphQLString}
        }
});

const addressType = new Graphql.GraphQLObjectType({
  name: "address",
  fields: {
    street: { type: Graphql.GraphQLString },
    suite: { type: Graphql.GraphQLString },
    city: { type: Graphql.GraphQLString },
    zipcode: { type: Graphql.GraphQLString },
    geo: { type: geoType } // Object 형태일 경우 새로 GrapgQLObject를 만들어서 지정해 줍니>$
  }
});

const userType = new Graphql.GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: Graphql.GraphQLInt },
    name: { type: Graphql.GraphQLString },
    username: { type: Graphql.GraphQLString },
    email: { type: Graphql.GraphQLString },
    address: { type: addressType }, // Object 형태일 경우 새로 GrapgQLObject를 만들어서 지>$
    phone: { type: Graphql.GraphQLString },
    website: { type: Graphql.GraphQLString },
    company: { type: companyType } // Object 형태일 경우 새로 GrapgQLObject를 만들어서 지정$
  }
});

var queryType = new Graphql.GraphQLObjectType({
        name: "Query",
        fields: {
                user: {
                        type: userType,
                        args: { //쿼리문 중 인자를 정의하는곳
                                id:{ type: Graphql.GraphQLInt}
                        },
                        resolve: function(_,{id}) { //실제 쿼리될때 호출하는 메소드
                                const data = Object.keys(fakeDatabase).filter(element => {
                                  if(fakeDatabase[element].id == id) {
                                        return element;
                                  }
                                });
                                return fakeDatabase[data];
                        }
                },
                allUser: { 
                        type: new Graphql.GraphQLList(userType),
                        resolve: function(_,_,_,_) {
                          return fakeDatabase;
                        }
                }
        }
});

var schema = new Graphql.GraphQLSchema({ query: queryType});

app.use('/graphql', graphqlHTTP({
        schema: schema,
        graphql: true,
        })
);

var server = app.listen(port, function () {
  console.log('Express and GraphQL server has started on port: ' + port);
});

app.get('/', function (req,res) {
  res.send(id)
});



