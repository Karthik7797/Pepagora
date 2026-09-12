'use client';

import { IconButton, Input, Textarea } from '@/components/ui';
import { FormStack } from '../shared';
import s from './ListForm.module.scss';

interface ListItem {
  id: string;
  title?: string;
  name?: string;
  description?: string;
}

interface Props<T extends ListItem> {
  items: T[];
  onChange: (items: T[]) => void;
  itemLabel: string;
  /** Shape used when adding a new entry. */
  createItem: () => T;
}

/** Repeater for sections built from a list — pointers, industries, logos. */
export function ListForm<T extends ListItem>({
  items,
  onChange,
  itemLabel,
  createItem,
}: Props<T>) {
  const patch = (id: string, value: Partial<T>) =>
    onChange(
      items.map((item) => (item.id === id ? { ...item, ...value } : item)),
    );

  const remove = (id: string) =>
    onChange(items.filter((item) => item.id !== id));

  return (
    <FormStack>
      {items.map((item, index) => (
        <div key={item.id} className={s.item}>
          <div className={s.itemHeader}>
            <span className={s.itemTitle}>
              {itemLabel} {index + 1}
            </span>
            <IconButton
              icon="close"
              label={`Remove ${itemLabel} ${index + 1}`}
              size={26}
              onClick={() => remove(item.id)}
            />
          </div>

          <FormStack>
            <Input
              label="Title"
              value={item.title ?? item.name ?? ''}
              onChange={(e) =>
                patch(item.id, ('name' in item
                  ? { name: e.target.value }
                  : { title: e.target.value }) as Partial<T>)
              }
            />

            {'description' in item && (
              <Textarea
                label="Description"
                rows={2}
                value={item.description ?? ''}
                onChange={(e) =>
                  patch(item.id, { description: e.target.value } as Partial<T>)
                }
              />
            )}
          </FormStack>
        </div>
      ))}

      <button
        type="button"
        className={s.addButton}
        onClick={() => onChange([...items, createItem()])}
      >
        + Add {itemLabel}
      </button>
    </FormStack>
  );
}
