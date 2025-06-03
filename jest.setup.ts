import "@testing-library/jest-dom";

// Mock Radix UI icons
jest.mock("@radix-ui/react-icons", () => ({
  GitHubLogoIcon: (props: any) => <svg {...props} />,
}));

// Mock Radix UI Label
jest.mock("@radix-ui/react-label", () => ({
  Label: ({ children, ...props }: any) => <label {...props}>{children}</label>,
}));
