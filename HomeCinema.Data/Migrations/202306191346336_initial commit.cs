namespace Iftekhari.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class initialcommit : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "Iftekhari.Error",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Message = c.String(),
                        StackTrace = c.String(),
                        DateCreated = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "Iftekhari.Role",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false, maxLength: 50),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "Iftekhari.UserRole",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        UserId = c.Int(nullable: false),
                        RoleId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.ID)
                .ForeignKey("Iftekhari.Role", t => t.RoleId, cascadeDelete: true)
                .ForeignKey("Iftekhari.User", t => t.UserId, cascadeDelete: true)
                .Index(t => t.UserId)
                .Index(t => t.RoleId);
            
            CreateTable(
                "Iftekhari.User",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Username = c.String(nullable: false, maxLength: 100),
                        OperatorId = c.Int(nullable: false),
                        Email = c.String(nullable: false, maxLength: 200),
                        Phone = c.String(),
                        HashedPassword = c.String(nullable: false, maxLength: 200),
                        Salt = c.String(nullable: false, maxLength: 200),
                        IsLocked = c.Boolean(nullable: false),
                        DateCreated = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.ID);
            
        }
        
        public override void Down()
        {
            DropForeignKey("Iftekhari.UserRole", "UserId", "Iftekhari.User");
            DropForeignKey("Iftekhari.UserRole", "RoleId", "Iftekhari.Role");
            DropIndex("Iftekhari.UserRole", new[] { "RoleId" });
            DropIndex("Iftekhari.UserRole", new[] { "UserId" });
            DropTable("Iftekhari.User");
            DropTable("Iftekhari.UserRole");
            DropTable("Iftekhari.Role");
            DropTable("Iftekhari.Error");
        }
    }
}
