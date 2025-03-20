import { useBracket } from '@/context/BracketContext'
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { useState } from 'react'

const teams = [
  { id: 51, name: '16 High Point'},
  { id: 52, name: '16 William & Mary'},
]

export default function Birmingham3_Input16_FF({ region, gameId }) {
  const { handlePick, userPicks } = useBracket();
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(null)

    // Handle selection and update BracktContext
    const handleSelection = (value) => {
      if(!value) return;
      setSelected(value);
      handlePick(region, gameId, value.name);
    };
  const filteredPeople =
    query === ''
      ? teams
      : teams.filter((team) => {
          return team.name.toLowerCase().includes(query.toLowerCase())
        })

  return (
    <div className="mx-auto w-33 pt-0">
      <Combobox value={selected} onChange={handleSelection} onClose={() => setQuery('')}>
        <div className="relative">
          <ComboboxInput
            className={clsx(
              'w-full rounded-lg border-none bg-white/5 py-1.5 pr-8 pl-3 text-sm/6 text-white',
              'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
            )}
            placeholder='Select...'
            displayValue={(team) => team?.name || ''}
            onChange={(event) => setQuery(event.target.value)}
          />
          <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5 cursor-pointer">
            <ChevronDownIcon className="size-4 fill-white/60 group-data-[hover]:fill-white" />
          </ComboboxButton>
        </div>

        <ComboboxOptions
          anchor="bottom"
          transition
          className={clsx(
            'w-[var(--input-width)] rounded-b-xl border border-white/5 bg-blue-800 p-1 [--anchor-gap:var(--spacing-1)] empty:invisible',
            'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
          )}
        >
          {filteredPeople.map((team) => (
            <ComboboxOption
              key={team.id}
              value={team}
              className="group flex cursor-pointer items-center gap-2 rounded-lg py-1.5 px-2 select-none data-[focus]:bg-white/20"
            >
              {/* <CheckIcon className="invisible size-4 fill-white group-data-[selected]:visible" /> */}
              <div className="text-sm/6 text-white">{team.name}</div>
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </Combobox>
    </div>
  )
}