<template>
  <div class="tags" v-if="showTags">  <!-- 用一个computed类里定义的函数来进行条件判断这里没有括号，很迷惑性 -->
    <ul>
      <!-- 用一个computed里的函数的返回值获得列表这个列表由 item 和 index 组成， 其中item又有path，title属性 -->
      <li
        class="tags-li"
        v-for="(item,index) in tagsList"
        :class="{'active': isActive(item.path)}"
        :key="index"
      > <!-- 看到下面这行的closeTags，就知道说的是模版里的那一行小小的打开窗口 -->
        <router-link :to="item.path" class="tags-li-title">{{item.title}}</router-link>
          <span class="tags-li-icon" @click="closeTags(index)">
            <i class="el-icon-close"></i>
          </span>
      </li>
    </ul>
    <div class="tags-close-box">
      <el-dropdown @command="handleTags">
        <el-button size="mini" type="primary">
          标签选项
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <template #dropdown>
          <el-dropdown-menu size="small">
            <el-dropdown-item command="other">关闭其他</el-dropdown-item>
            <el-dropdown-item command="all">关闭所有</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    tagsList () {
      return this.$store.state.tagsList
    },
    showTags () {
      return this.tagsList.length > 0
    }
  },
  methods: {
    isActive (path) {
      return path === this.$route.fullPath
    },
    closeTags(index) {
      const delItem = this.tagsList[index]
      this.$store.commit('delTagsIteem', { index })
      const item = this.tagsList[index] ? this.tagsList[index] : this.tagsList[index-1]
      if (item) {
        delItem.path === this.$route.fullPath && this.$router.push(item.path)
      } else {
        this.$router.push('/')
      }
    },
    closeAll () {
      this.$store.commit('clearTags')
      this.$router.push('/')
    },
    closeOther () {
      const curItem = this.tagsList.filter(item => {
        return item.path === this.$route.fullPath
      })
      this.$store.commit('closeTagsOther', curItem)
    },
    setTags(route) {
      const isExist = this.tagsList.some(item => {
        returnitem.path === route.fullPath
      })
      if(!isExist) {
        if (this.tagsList.length >= 8) {
          this.$store.commit('delTagsItem', { index: 0 })
        }
        this.$store.commit('delTagsItem', {
          name: route.name,
          title: route.meta.title,
          path: route.fullPath
        })
      }
    },
    handleTags (command) {
      command === 'other' ? this.closeOther() : this.closeAll()
    }
  },
  watch: {
    $route (newValue) {
      this.setTags(newValue)
    }
  },
  created () {
    this.setTags(this.$route)
  }
}
</script>

<style scoped>

</style>
