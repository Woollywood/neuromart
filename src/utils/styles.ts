export enum MediaSizesValue {
  SM = 375,
  MD = 768,
  LG = 1180,
  XL = 1440,
  XXL = 1920,
}

export enum MediaSizes {
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
  XXL = 'xxl',
}

export const setCssVariable = (name: string, value: string) => document.documentElement.style.setProperty(name, value);
export const getCssVariable = (name: string) => getComputedStyle(document.body).getPropertyValue(name);

export const getMediaCssVariable = (size: MediaSizes) => getCssVariable(`--media-${size}`);
export const getMediaCssParsedVariable = (size: MediaSizes) => parseInt(getMediaCssVariable(size));

export const overflowItems = (container: HTMLElement) => {
  const clear = (items: HTMLElement[]) =>
    items.forEach((item) => {
      item.classList.remove('overflowed');
      item.style.display = '';
    });

  const items = container.querySelectorAll<HTMLElement>('[data-overflow-element]');
  clear([...items]);
  const containerBox = container.getBoundingClientRect();

  const overflowItemsInner = () => {
    const visibleItems = [...container.querySelectorAll<HTMLElement>('[data-overflow-element]')].filter(
      (item) => !item.classList.contains('overflowed')
    );
    const lastVisibleItem = visibleItems[visibleItems.length - 1];
    const lastVisibleItemBox = lastVisibleItem.getBoundingClientRect();
    const lastVisibleItemWidth = lastVisibleItemBox.right - containerBox.left;
    if (lastVisibleItemWidth > containerBox.width) {
      lastVisibleItem.classList.add('overflowed');
      lastVisibleItem.style.display = 'none';
      overflowItemsInner();
    } else {
      return;
    }
  };

  const lastItemBox = items[items.length - 1].getBoundingClientRect();
  const itemsWidth = lastItemBox.right - containerBox.left;
  if (itemsWidth > containerBox.width) {
    overflowItemsInner();
  }
};
