<template>
  <div id="editor">
    <textarea :value="input" @input="onUpdate"></textarea>
    <div v-html="compiledMarkdown"></div>
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
  padding: 0 20px;
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
