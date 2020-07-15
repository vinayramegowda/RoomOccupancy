export class RoomOccupancyModel {
    constructor(
      public UsageBusiness: number,
      public UsageBusinessPrice:number,
      public UsageEconomy:number,
      public UsageEconomyPrice:number,
      public FreeEconomyRooms:number,
      public FreeBusinessRooms:number) { 
          this.UsageBusiness=UsageBusiness;
          this.UsageBusinessPrice=UsageBusinessPrice;
          this.UsageEconomy=UsageEconomy;
          this.UsageEconomyPrice=UsageEconomyPrice;
          this.FreeBusinessRooms=FreeBusinessRooms;
          this.FreeEconomyRooms=FreeEconomyRooms;
      }
  }