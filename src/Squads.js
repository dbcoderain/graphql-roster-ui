import React from 'react';
import { Query } from 'react-apollo';
import { ROOT_QUERY } from './App';

const Squads = () =>
    <Query query={ROOT_QUERY}>
        {({ data, loading}) =>
            loading ? <p>loading squads...</p> :
            <SquadsList squads={data.getSquads} />
        }
    </Query>


const SquadsList = ({ squads }) =>
    <div>
        <table border="1" width="100%">
            <th>
                Squad
            </th>
            <th>
                Mission
            </th>
            <th>
                Members
            </th>
            { squads.map(squad =>
                    <SquadsListItem key={squad._id}
                        name={squad.name}
                        mission={squad.mission}
                        members={squad.members}
                        />
            )}
        </table>
    </div>

const SquadsListItem = ({ name, mission, members }) =>
    <tr>
        <td>{name}</td>
        <td>{mission}</td>
        <td>{members.map(member =>
            <span>
                {member.name} [{member.role}]<br/>
            </span>
        )}</td>
    </tr>

export default Squads;
