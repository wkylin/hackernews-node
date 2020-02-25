### Query

#### Write your query or mutation here


>query fun1{
>  info
>}

>query fun2{
>  feed{
>    id
>  }
>}

>mutation posts {
>  post(url: "www.prism.io", description:"Prisma replaces traditional"){
>    id
>  }
>}

>mutation delete{
>  deleteLink(id: "link-1"){
>    id
>  }
>}
