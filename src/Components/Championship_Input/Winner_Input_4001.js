import { useBracket } from '@/context/BracketContext';
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import { useState } from 'react';

const teams = [
  { id: 1, name: '1 UCLA' },
  { id: 2, name: '2 NC State' },
  { id: 3, name: '3 LSU' },
  { id: 4, name: '4 Baylor' },
  { id: 5, name: '5 Ole Miss' },
  { id: 6, name: '6 FSU' },
  { id: 7, name: '7 MSU' },
  { id: 8, name: '8 Richmond' },
  { id: 9, name: '9 Georgia Tech' },
  { id: 10, name: '10 Harvard' },
  { id: 11, name: '11 George Mason' },
  { id: 12, name: '12 Ball St' },
  { id: 13, name: '13 GCU' },
  { id: 14, name: '14 SDSU' },
  { id: 15, name: '15 Vemont' },
  { id: 16, name: '16 UCSD' },
  { id: 17, name: '16 Southern' },
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

export default function Winner_Input_4001({ region, gameId }) {
  const { handleSelection, selectedTeam } = useBracket();
  const [query, setQuery] = useState('')

  const filteredTeams =
    query === ''
      ? teams
      : teams.filter((team) => {
          return team.name.toLowerCase().includes(query.toLowerCase())
        })

  // return (
  //   <div className="mx-auto w-33 pt-0">
  //     <Combobox value={selectedTeam} onChange={(team) => handleSelection(region, gameId, team)} onClose={() => setQuery('')}>
  //       <div className="relative">
  //         <ComboboxInput
  //           className={clsx(
  //             'w-full rounded-lg border-none bg-white/5 py-1.5 pr-8 pl-3 text-sm/6 text-white',
  //             'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
  //           )}
  //           placeholder='Select...'
  //           displayValue={(team) => team?.name || ''}
  //           onChange={(event) => setQuery(event.target.value)}
  //         />
  //         <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5 cursor-pointer">
  //           <ChevronDownIcon className="size-4 fill-white/60 group-data-[hover]:fill-white" />
  //         </ComboboxButton>
  //       </div>

  //       <ComboboxOptions
  //         anchor="bottom"
  //         transition
  //         className={clsx(
  //           'w-[var(--input-width)] rounded-b-xl border border-white/5 bg-blue-800 p-1 [--anchor-gap:var(--spacing-1)] empty:invisible',
  //           'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
  //         )}
  //       >
  //         {filteredTeams.map((team) => (
  //           <ComboboxOption
  //             key={team.id}
  //             value={team}
  //             className="group flex cursor-pointer items-center gap-2 rounded-lg py-1.5 px-2 select-none data-[focus]:bg-white/20"
  //           >
  //             <div className="text-sm/6 text-white">{team.name}</div>
  //           </ComboboxOption>
  //         ))}
  //       </ComboboxOptions>
  //     </Combobox>
  //   </div>
  // )
}