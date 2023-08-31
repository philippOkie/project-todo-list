export const r = document.querySelector(":root");
export const themeBtn = document.getElementById("themeBtn");

export function changeTheme() {
  if (getComputedStyle(r).getPropertyValue("--base-color") != "#f9f9f9") {
    return (
      r.style.setProperty("--base-color", "#f9f9f9"),
      r.style.setProperty("--bkcolor", "#04080f"),
      localStorage.setItem("--base-color", "#f9f9f9"),
      localStorage.setItem("--bkcolor", "#04080f")
    );
  } else if (
    getComputedStyle(r).getPropertyValue("--base-color") == "#f9f9f9"
  ) {
    return (
      r.style.setProperty("--base-color", "#04080f"),
      r.style.setProperty("--bkcolor", "#f9f9f9"),
      localStorage.setItem("--base-color", "#04080f"),
      localStorage.setItem("--bkcolor", "#f9f9f9")
    );
  }
}
