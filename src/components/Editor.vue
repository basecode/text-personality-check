<template>
  <div id="editor">
    <textarea :value="input" @input="onUpdate"></textarea>
    <div>{{ input }}</div>
  </div>
</template>

<script>
export default {
  name: 'Editor',
  data () {
    return { input: 'HEHEHEH' };
  },
  computed: {
    compiledMarkdown: function () {
      return this.input;
    }
  },
  methods: {
    onUpdate (event) {
      this.input = event.target.value
    }
  }
}
const text = `Vice President Johnson, Mr. Speaker, Mr. Chief Justice, President Eisenhower,
Vice President Nixon, President Truman, Reverend Clergy, fellow citizens:

We observe today not a victory of party but a celebration of freedom --
symbolizing an end as well as a beginning -- signifying renewal as well as
change. For I have sworn before you and Almighty God the same solemn oath our
forbears prescribed nearly a century and three-quarters ago.

The world is very different now. For man holds in his mortal hands the power
to abolish all forms of human poverty and all forms of human life. And yet
the same revolutionary beliefs for which our forebears fought are still at
issue around the globe -- the belief that the rights of man come not from the
generosity of the state but from the hand of God.`;

const url = 'https://gateway-fra.watsonplatform.net/personality-insights/api/v3/profile?version=2017-10-13';
fetch(url, {
    method: "POST",
    headers: {
       "Content-Type": "text/plain;charset=utf-8",
       "Accept": "application/json" 
    },
    body: text
})
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html, body, #editor {
  margin: 0;
  height: 100%;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color: #333;
}

textarea, #editor div {
  display: inline-block;
  width: 49%;
  height: 100%;
  vertical-align: top;
  box-sizing: border-box;
  text-align: left;
  padding: 15px 20px;
}

textarea {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: 'Monaco', courier, monospace;
  padding: 20px;
}

code {
  color: #f66;
}
</style>
