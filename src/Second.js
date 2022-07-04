








import React from 'react';
import { PermissionConsumer } from './PermissionProvider.jsx';
const Second = () => (
<PermissionConsumer name="first"> 
<div>
<button>Second</button> 
</div> 
</PermissionConsumer>
);

export default  Second;
