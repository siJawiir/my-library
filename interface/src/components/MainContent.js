import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage, PageNotFound, SettingPage } from "../pages";
import AuthorPage from "../pages/books/AuthorPage";
import BookPage from "../pages/books/BookPage";
import BookPageAdd from "../pages/books/BookPageAdd";
import CategoryPage from "../pages/books/CategoryPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import UserPage from "../pages/UserPage";
import TableBook from "./BookComponents/TableBook";

function MainContent() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        <Route path="/books" element={<BookPage />} />
        <Route path="/books/add" element={<BookPageAdd />} />
        
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/authors" element={<AuthorPage />} />
        <Route path="/users" element={<UserPage />} />
        <Route path="/settings" element={<SettingPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default MainContent;
