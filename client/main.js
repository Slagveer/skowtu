import angular from 'angular';
import angularMeteor from 'angular-meteor';
import todosList from '../imports/components/todosList/todosList';
import cartoon from '../imports/components/cartoon/cartoon';

angular.module('simple-todos', [
  angularMeteor,
  todosList.name,
  cartoon.name
]);