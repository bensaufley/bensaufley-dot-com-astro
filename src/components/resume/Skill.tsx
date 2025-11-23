import { clsx } from 'clsx';
import { type Accessor, createSignal, For, onCleanup, onMount, Show, type VoidComponent } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import Tooltip from '~components/Tooltip';

import * as icons from './icons';
import type { SkillInfo } from './SkillSet';

import styles from './styles.module.css';

interface Props {
  index: number;
  group: string;
  showIcons: Accessor<boolean>;
  skills: readonly SkillInfo[];
}

const MultiIcon: VoidComponent<{ delay: number; group: string; grouped: readonly SkillInfo[] }> = ({
  delay,
  group,
  grouped,
}) => {
  const [hover, setHover] = createSignal(false);
  const [current, setCurrent] = createSignal(0);

  let interval: NodeJS.Timeout | undefined;
  onMount(() => {
    setTimeout(() => {
      interval = setInterval(() => {
        if (hover()) return;
        setCurrent((prev) => (prev + 1) % grouped.length);
      }, 3_000);
    }, delay * 250);
  });

  onCleanup(() => interval && clearInterval(interval));

  return (
    <Tooltip
      tooltipProps={{
        onHover: () => setHover(true),
        onLeave: () => setHover(false),
        group,
      }}
      content={
        <For each={grouped}>
          {({ name, link }, i) => (
            <>
              <a href={link} target="_blank" rel="noopener noreferrer">
                <Show when={i() === current()} fallback={name}>
                  <strong>{name}</strong>
                </Show>
              </a>
              {i() < grouped.length - 1 && ', '}
            </>
          )}
        </For>
      }
    >
      <For each={grouped}>
        {({ icon, link }, i) => (
          <a class={clsx(i() === current() && styles.visible)} href={link} target="_blank" rel="noopener noreferrer">
            <Dynamic
              component={icons[icon]!}
              aria-hidden
              fill="currentColor"
              class={clsx(i() === current() && styles.visible)}
            />
          </a>
        )}
      </For>
    </Tooltip>
  );
};

const Plaintext: VoidComponent<{ grouped: readonly SkillInfo[] }> = ({ grouped: skills }) => (
  <>
    <For each={skills}>
      {({ name, link }, i) => (
        <>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <span>{name}</span>
          </a>
          <Show when={i() < skills.length - 1}>/</Show>
        </>
      )}
    </For>
  </>
);

const Skill: VoidComponent<Props> = ({ skills, index, group, showIcons }) => (
  <div class={styles.skill}>
    <Show when={showIcons()} fallback={<Plaintext grouped={skills} />}>
      <MultiIcon group={group} grouped={skills} delay={index} />
    </Show>
  </div>
);

export default Skill;
