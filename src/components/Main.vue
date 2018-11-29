<template>
 
    <div class="f-column f-full">
        <div class="main-header f-row">
            <div class="f-row f-full">
                <div class="main-title f-animate f-row" :style="{width:width+'px'}">
                    <img class="app-logo" src="https://www.jeasyui.com/favicon.ico">
                    <span v-if="!collapsed">{{title}}</span>
                </div>
                <div class="main-bar f-full">
                    <span class="main-toggle fa fa-bars" @click="toggle()"></span>
                </div>
            </div>
        </div>
        <div class="f-row f-full">
            <div class="sidebar-body f-animate" :style="{width:width+'px'}">
                <div v-if="!collapsed" class="sidebar-user">
                    User Panel
                </div>
                <SideMenu :data="menus" :border="false" :collapsed="collapsed" @itemClick="onItemClick($event)"></SideMenu>
            </div>
            <div class="main-body f-full">
                <p v-if="selectedMenu">{{selectedMenu.text}}</p>
            </div>
        </div>
    </div>

</template>
 
<script>
export default {
  data() {
    return {
      title: 'AppLayout',
      width: 200,
      collapsed: false,
      selectedMenu: null,
      menus: [
        {
          text: "Forms",
          iconCls: "fa fa-wpforms",
          state: "open",
          children: [
            {
              text: "Form Element"
            },
            {
              text: "Wizard"
            },
            {
              text: "File Upload"
            }
          ]
        },
        {
          text: "Mail",
          iconCls: "fa fa-at",
          selected: true,
          children: [
            {
              text: "Inbox"
            },
            {
              text: "Sent"
            },
            {
              text: "Trash",
              children: [
                {
                  text: "Item1"
                },
                {
                  text: "Item2"
                }
              ]
            }
          ]
        },
        {
          text: "Layout",
          iconCls: "fa fa-table",
          children: [
            {
              text: "Panel"
            },
            {
              text: "Accordion"
            },
            {
              text: "Tabs"
            }
          ]
        }
      ]
    };
  },
  methods: {
    toggle() {
      this.collapsed = !this.collapsed;
      this.width = this.collapsed ? 50 : 200;
    },
    onItemClick(item) {
      this.selectedMenu = item;
    }
  }
};
</script>
<style>
@import "https://netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
 
.sidemenu .accordion .panel-title {
  color: #b8c7ce;
}
.sidemenu .accordion .accordion-header {
  background: #222d32;
  color: #b8c7ce;
}
.sidemenu .accordion .accordion-body {
  background: #2c3b41;
  color: #8aa4af;
}
.sidemenu .accordion .accordion-header-selected {
  background: #1e282c;
}
.sidemenu .tree-node-hover {
  background: #2c3b41;
  color: #fff;
}
.sidemenu .tree-node-selected {
  background: #2c3b41;
  color: #fff;
}
.sidemenu .accordion-header .panel-tool {
  display: none;
}
.sidemenu .accordion-header::after,
.sidemenu .tree-node-nonleaf::after {
  display: inline-block;
  vertical-align: top;
  border-style: solid;
  transform: rotate(45deg);
  width: 4px;
  height: 4px;
  content: "";
  position: absolute;
  right: 10px;
  top: 50%;
  margin-top: -3px;
  border-width: 0 1px 1px 0;
}
.sidemenu .accordion-header-selected::after {
  transform: rotate(-135deg);
}
.sidemenu .tree-node-nonleaf::after {
  transform: rotate(-135deg);
}
.sidemenu .tree-node-nonleaf-collapsed::after {
  transform: rotate(45deg);
}
.sidemenu-collapsed .accordion-header::after {
  display: none;
}
.sidemenu-tooltip .accordion {
  border-color: #1e282c;
}
 
html,
body {
  margin: 0;
  padding: 0;
}
.app-logo {
  width: 24px;
  height: 24px;
  color: #fff;
  margin: 13px 10px;
}
.main-header {
  background: #3c8dbc;
  color: #fff;
  line-height: 50px;
  height: 50px;
}
.main-title {
  background: #367fa9;
  font-size: 20px;
  text-align: center;
  overflow: hidden;
}
.main-bar {
  background: #3c8dbc;
}
.main-toggle {
  position: relative;
  display: inline-block;
  width: 16px;
  height: 16px;
  cursor: pointer;
  color: #fff;
  margin: 0 10px;
}
.main-body {
  background: #ecf0f5;
  min-height: 400px;
}
.sidebar-body {
  background: #222d32;
}
.sidebar-user {
  color: #fff;
  padding: 20px;
  line-height: 20px;
}
</style>