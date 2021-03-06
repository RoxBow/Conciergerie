import 'antd/dist/antd.css';
import '../../styles/_page-categories.scss';
import React from 'react';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import Categories from '../Categories/Categories';
import TemplatePage from '../TemplatePage/TemplatePage';

const PageCategories = () => (
  <TemplatePage>
    <Breadcrumb />
    <Categories />
  </TemplatePage>
);

export default PageCategories;
