import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  VentureBaseURIUpdated,
  VentureCreated
} from "../generated/SpaceDock/SpaceDock"

export function createRoleAdminChangedEvent(
  role: Bytes,
  previousAdminRole: Bytes,
  newAdminRole: Bytes
): RoleAdminChanged {
  let roleAdminChangedEvent = changetype<RoleAdminChanged>(newMockEvent())

  roleAdminChangedEvent.parameters = new Array()

  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdminRole",
      ethereum.Value.fromFixedBytes(previousAdminRole)
    )
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAdminRole",
      ethereum.Value.fromFixedBytes(newAdminRole)
    )
  )

  return roleAdminChangedEvent
}

export function createRoleGrantedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleGranted {
  let roleGrantedEvent = changetype<RoleGranted>(newMockEvent())

  roleGrantedEvent.parameters = new Array()

  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleGrantedEvent
}

export function createRoleRevokedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleRevoked {
  let roleRevokedEvent = changetype<RoleRevoked>(newMockEvent())

  roleRevokedEvent.parameters = new Array()

  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleRevokedEvent
}

export function createVentureBaseURIUpdatedEvent(
  founder: Address,
  ventureBaseURI: string
): VentureBaseURIUpdated {
  let ventureBaseUriUpdatedEvent = changetype<VentureBaseURIUpdated>(
    newMockEvent()
  )

  ventureBaseUriUpdatedEvent.parameters = new Array()

  ventureBaseUriUpdatedEvent.parameters.push(
    new ethereum.EventParam("founder", ethereum.Value.fromAddress(founder))
  )
  ventureBaseUriUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "ventureBaseURI",
      ethereum.Value.fromString(ventureBaseURI)
    )
  )

  return ventureBaseUriUpdatedEvent
}

export function createVentureCreatedEvent(
  ventureId: BigInt,
  data: ethereum.Tuple,
  founder: Address,
  createdAt: BigInt
): VentureCreated {
  let ventureCreatedEvent = changetype<VentureCreated>(newMockEvent())

  ventureCreatedEvent.parameters = new Array()

  ventureCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "ventureId",
      ethereum.Value.fromUnsignedBigInt(ventureId)
    )
  )
  ventureCreatedEvent.parameters.push(
    new ethereum.EventParam("data", ethereum.Value.fromTuple(data))
  )
  ventureCreatedEvent.parameters.push(
    new ethereum.EventParam("founder", ethereum.Value.fromAddress(founder))
  )
  ventureCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "createdAt",
      ethereum.Value.fromUnsignedBigInt(createdAt)
    )
  )

  return ventureCreatedEvent
}
