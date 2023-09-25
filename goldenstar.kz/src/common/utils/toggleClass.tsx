export function toggleClass(
  arrEl: HTMLElement[],
  toggledClass: string,
  isAdded: boolean
) {
  arrEl.forEach((bullet) => {
    if (isAdded) {
      bullet.classList.add(toggledClass);
    } else {
      bullet.classList.remove(toggledClass);
    }
  });
}
