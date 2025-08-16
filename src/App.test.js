import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders main navigation", () => {
  render(<App />);
  const homeLink = screen.getByText(/home/i);
  const aboutLink = screen.getByText(/about/i);
  const projectsLink = screen.getByText(/projects/i);
  const contactLink = screen.getByText(/contact/i);

  expect(homeLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
  expect(projectsLink).toBeInTheDocument();
  expect(contactLink).toBeInTheDocument();
});

test("renders hero section with main title", () => {
  render(<App />);
  const heroTitle = screen.getByText(/I AM A/i);
  expect(heroTitle).toBeInTheDocument();
});

test("renders expertise section", () => {
  render(<App />);
  const expertiseTitle = screen.getByText(/Expertise/i);
  expect(expertiseTitle).toBeInTheDocument();
});

test("renders works section", () => {
  render(<App />);
  const worksTitle = screen.getByText("✨ Works");
  expect(worksTitle).toBeInTheDocument();
});

test("renders blog section", () => {
  render(<App />);
  const blogTitle = screen.getByText(/Blog/i);
  expect(blogTitle).toBeInTheDocument();
});

test("renders FAQ section with interactive questions", () => {
  render(<App />);
  const faqTitle = screen.getByText(/Frequently asked questions/i);
  expect(faqTitle).toBeInTheDocument();

  // Test FAQ interaction
  const firstQuestion = screen.getByText(/What is your design process/i);
  expect(firstQuestion).toBeInTheDocument();

  fireEvent.click(firstQuestion);
  // The answer should be visible after clicking
  const answer = screen.getByText(/My design process typically involves/i);
  expect(answer).toBeInTheDocument();
});

test("renders experience section", () => {
  render(<App />);
  const experienceTitle = screen.getByText(/Experience/i);
  expect(experienceTitle).toBeInTheDocument();
});

test("renders footer with contact information", () => {
  render(<App />);
  const footerTitle = screen.getByText(/LET'S TALK!/i);
  const emailLink = screen.getByText(/rehanurraihan@gmail.com/i);

  expect(footerTitle).toBeInTheDocument();
  expect(emailLink).toBeInTheDocument();
});

test("testimonial navigation works", () => {
  render(<App />);
  const nextButton = screen.getByText("→");
  const prevButton = screen.getByText("←");

  expect(nextButton).toBeInTheDocument();
  expect(prevButton).toBeInTheDocument();

  // Test clicking next button
  fireEvent.click(nextButton);
  // Should still be in document after click
  expect(nextButton).toBeInTheDocument();
});
