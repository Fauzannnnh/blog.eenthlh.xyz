<template>
  <div class="posts" v-if="posts.length">
    <div class="post" v-for="post in posts">
      <router-link :to="post.path">
        <span>
          <img v-if="post.frontmatter.image" :src="$withBase(post.frontmatter.image)" alt="">
          <h2>{{post.frontmatter.title}}</h2>
          <p>{{post.frontmatter.description}}</p>
        </span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["page"],
  computed: {
    posts() {
      let currentPage = this.page ? this.page : this.$page.path;
      let posts = this.$site.pages
        .filter(x => {
          return x.path.match(new RegExp(`(${currentPage})(?=.*html)`));
        })
        .sort((a, b) => {
          return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
        });
      return posts;
    }
  }
};
</script>

<style lang="stylus">
.post
  h2
    color $textColor
    border-bottom 0px
    border-top 3px solid $borderColor
    padding-top 0.8rem
    margin-bottom 0.2rem
  p
    color $textColor
</style>