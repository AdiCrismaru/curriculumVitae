"use strict";
const resume = document.querySelector(".bigBox2");
const portofolio = document.querySelector(".bigBox4");
const aptitudiniLimbi = document.querySelector(".none");
const btnSkill = document.getElementById("skillsBtn");
const btnAbout = document.getElementById("aboutBtn");
const btnPortofolio = document.getElementById("portofolioBtn");
const active = document.querySelector(".active");
const activeTag = function (a, b, c) {
  a.classList.add("active");
  b.classList.remove("active");
  c.classList.remove("active");
};
const menu = function (a, b, c) {
  a.classList.remove("none");
  b.classList.add("none");
  c.classList.add("none");
};
btnSkill.addEventListener("click", function () {
  menu(aptitudiniLimbi, resume, portofolio);
  activeTag(btnSkill, btnAbout, btnPortofolio);
});
btnAbout.addEventListener("click", function () {
  menu(resume, aptitudiniLimbi, portofolio);
  activeTag(btnAbout, btnPortofolio, btnSkill);
});
btnPortofolio.addEventListener("click", function () {
  menu(portofolio, resume, aptitudiniLimbi);
  activeTag(btnPortofolio, btnAbout, btnSkill);
});
