import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { useState } from 'react'

const teams = [
  { id: 53, name: '1 USC' },
  { id: 54, name: '2 UCONN' },
  { id: 55, name: '3 Oklahoma' },
  { id: 56, name: '4 Kentucky' },
  { id: 57, name: '5 KSU' },
  { id: 58, name: '6 Iowa' },
  { id: 59, name: '7 OSU' },
  { id: 60, name: '8 Cal' },
  { id: 61, name: '9 MSU' },
  { id: 62, name: '10 S Dokota St' },
  { id: 63, name: '11 Murray St' },
  { id: 64, name: '12 Fairfield' },
  { id: 65, name: '13 Liberty' },
  { id: 66, name: '14 FGCU' },
  { id: 67, name: '15 Arkansas St' },
  { id: 68, name: '16 UNC Greensboro' },
]

export default function Spokane4_Input() {
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(teams[0])

  const filteredPeople =
    query === ''
      ? teams
      : teams.filter((team) => {
          return team.name.toLowerCase().includes(query.toLowerCase())
        })

  return (
    <div className="mx-auto w-33 pt-0">
      <Combobox value={selected} onChange={(value) => setSelected(value)} onClose={() => setQuery('')}>
        <div className="relative">
          <ComboboxInput
            className={clsx(
              'w-full rounded-lg border-none bg-white/5 py-1.5 pr-8 pl-3 text-sm/6 text-white',
              'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
            )}
            displayValue={(team) => team?.name}
            onChange={(event) => setQuery(event.target.value)}
          />
          <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
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
              className="group flex cursor-pointer items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/20"
            >
              <CheckIcon className="invisible size-4 fill-white group-data-[selected]:visible" />
              <div className="text-sm/6 text-white">{team.name}</div>
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </Combobox>
    </div>
  )
}