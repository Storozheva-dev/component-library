import { useState } from "react";
import styles from "./SidebarMenu.module.css";

interface MenuItem {
  label: string;
  children?: MenuItem[];
}

interface SidebarMenuProps {
  items: MenuItem[];
  isOpen: boolean;
  onClose: () => void;
}

export function SidebarMenu({ items = [], isOpen, onClose }: SidebarMenuProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleSubmenu = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  if (!isOpen) return null;

  return (
    <>
      <div className={styles.backdrop} onClick={onClose} />
      <nav
        className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}
        role="navigation"
        aria-label="Sidebar menu"
      >
        <ul className={styles.menu}>
          {items.map((item, idx) => (
            <li key={idx}>
              <button
                className={styles.menuItem}
                onClick={() => item.children && toggleSubmenu(idx)}
                aria-expanded={openIndex === idx}
              >
                {item.label}
              </button>
              {item.children && openIndex === idx && (
                <ul className={styles.submenu}>
                  {item.children.map((subItem, subIdx) => (
                    <li key={subIdx}>
                      <button className={styles.menuItem}>
                        {subItem.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
