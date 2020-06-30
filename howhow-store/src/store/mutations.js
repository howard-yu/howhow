import * as types from './mutations_type.js'
import Vue from 'vue'

// state
export const state = {
  count: 0,
  todos: [
    { key: 0, content: 'vue.js 2.0', done: true },
	{ key: 1, content: 'vuex 2.0', done: false },
	{ key: 2, content: 'vue-router 2.0', done: false },
	{ key: 3, content: 'vue-resource 2.0', done: false },
	{ key: 4, content: 'webpack', done: false }
  ]
}

let todoKey = state.todos.length;

export const mutations = {
    [types.INCREASE] (state, num) {
        state.count += num;
        console.log('INCREASE', num, 'state?', state.count);
    },
    [types.DECREASE] (state, num) {
        state.count -= num;
        console.log('DECREASE', num, 'state?', state.count);
    },
    [types.COUNT_RESET] (state) {
        state.count = 0;
        console.log('COUNT_RESET - state?', state.count);
    },
    [types.ADD_TODO] (state, newTodo) {
        state.todos.push({
            key: todoKey,
            content: newTodo,
            done: false
        });
        todoKey ++;
    },
    // 改變狀態
    [types.TOGGLE_TODO] (state, key) {
        for(var i in state.todos){
            var item = state.todos[i];
            if ( item.key === key){
                item.done = !item.done;
                console.log('TOGGLE_TODO:', item.content, 'done?', item.done);
                break;
            }
        }
    },
    // 刪除
    [types.DELETE_TODO] (state, key) {
        for(var i in state.todos){
            var item = state.todos[i];
            if ( item.key === key){
                console.log('DELETE_TODO:', item.content, ', index?', i);
                state.todos.splice(i, 1);
                break
            }
        }
    },
    [types.UPDATE_TODO] (state, obj) {
        for(var i in state.todos){
          var item = state.todos[i];
          if ( item.key === obj.key){
            console.log('UPDATE_TODO:', item.content, ' to →', obj.change);
            // 找到 todo 更新 content
            state.todos[ i ].content = obj.change;
            break;
          }
        }
    },
}