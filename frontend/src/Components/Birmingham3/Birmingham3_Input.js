import { useBracket } from '@/context/BracketContext'
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { useState } from 'react'

const teams = [
  { id: 35, name: '1 Texas' },
  { id: 36, name: '2 TCU' },
  { id: 37, name: '3 Notre Dame' },
  { id: 38, name: '4 Ohio St' },
  { id: 39, name: '5 Tennessee' },
  { id: 40, name: '6 Michighan' },
  { id: 41, name: '7 Louisville' },
  { id: 42, name: '8 Illinois' },
  { id: 43, name: '9 Creighton' },
  { id: 44, name: '10 Nebraska' },
  { id: 45, name: '11 Iowa' },
  { id: 46, name: '11 Princeton' },
  { id: 47, name: '12 South Florida' },
  { id: 48, name: '13 Montana St' },
  { id: 49, name: '14 SF Austin' },
  { id: 50, name: '15 Fair Dickinson'},
  { id: 51, name: '16 High Point'},
  { id: 52, name: '16 William & Mary'},
]

export default function Birmingham3_Input({ region, gameId }) {
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